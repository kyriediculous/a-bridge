// SPDX-FileCopyrightText: 2021 Tenderize <info@tenderize.me>
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

// ============ Internal Imports ============
import {BridgeMessage} from "./BridgeMessage.sol";
import {ABridgeToken} from "./ABridgeToken.sol";
import {TokenRegistry} from "./TokenRegistry.sol";

// ============ External Imports ============
import {XAppConnectionClient} from "./nomad/router/XAppConnectionClient.sol";
import {Router} from "./nomad/router/Router.sol";
import {Home} from "./nomad/core/Home.sol";
import {TypeCasts} from "./nomad/core/libs/TypeCasts.sol";
import {TypedMemView} from "./summa/TypedMemView.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract ABridgeRouter is Router {
    using TypedMemView for bytes;
    using TypedMemView for bytes29;
    using BridgeMessage for bytes29;
    using SafeERC20 for IERC20;

    // ============ Public Storage ============

    // contract that manages registry representation tokens
    TokenRegistry public tokenRegistry;

    // mapping tracking the amount of shares for a canonical aToken locked up to a destination.
    // Used to calculate the current supply for representation tokens
    mapping(bytes32 => uint256) private canonicalSharesAtDestination;

    // ======== Events =========

    /**
     * @notice emitted when tokens are sent from this domain to another domain
     * @param token the address of the token contract
     * @param from the address sending tokens
     * @param toDomain the domain of the chain the tokens are being sent to
     * @param toId the bytes32 address of the recipient of the tokens
     * @param amount the amount of tokens sent
     */
    event Send(
        address indexed token,
        address indexed from,
        uint32 indexed toDomain,
        bytes32 toId,
        uint256 amount
    );

    /**
     * @notice emitted when tokens are dispensed to an account on this domain
     * emitted when the transfer ultimately settles
     * @param originAndNonce Domain where the transfer originated and the unique identifier
     * for the message from origin to destination, combined in a single field ((origin << 32) & nonce)
     * @param token The address of the local token contract being received
     * @param recipient The address receiving the tokens; the original recipient of the transfer
     * @param amount The amount of tokens being received
     */
    event Receive(
        uint64 indexed originAndNonce,
        address indexed token,
        address indexed recipient,
        uint256 amount
    );

    // ======== Receive =======
    receive() external payable {}

    // ======== Initializer ========

    function initialize(address _tokenRegistry, address _xAppConnectionManager)
        public
        initializer
    {
        tokenRegistry = TokenRegistry(_tokenRegistry);
        __XAppConnectionClient_initialize(_xAppConnectionManager);
    }

    // ======== External =========

    // ===== Handle ======

    /**
     * @notice Handles an incoming message
     * @param _origin The origin domain
     * @param _nonce The unique identifier for the message from origin to destination
     * @param _sender The sender address
     * @param _message The message
     */
    function handle(
        uint32 _origin,
        uint32 _nonce,
        bytes32 _sender,
        bytes memory _message
    ) external override onlyReplica onlyRemoteRouter(_origin, _sender) {
        // parse tokenId and action from message
        bytes29 _msg = _message.ref(0).mustBeMessage();
        bytes29 _tokenId = _msg.tokenId();
        bytes29 _action = _msg.action();
        // handle message based on the intended action
        if (_action.isTransfer()) {
            _handleTransfer(_origin, _nonce, _tokenId, _action);
        } else if (_action.isUpdateSupply()) {
            _handleUpdateSupply(_tokenId, _action);
        } else {
            require(false, "!valid action");
        }
    }

    // ===== Send ======

    /**
     * @notice Send tokens to a recipient on a remote chain
     * @param _token The token address
     * @param _amount The token amount
     * @param _destination The destination domain
     * @param _recipient The recipient address
     */
    function send(
        address _token,
        uint256 _amount,
        uint32 _destination,
        bytes32 _recipient
    ) external {
        // validate inputs
        require(_recipient != bytes32(0), "!recip");
        // debit tokens from the sender
        (bytes29 _tokenId, bytes32 _detailsHash) = _takeTokens(_token, _amount);
        // format Transfer message
        bytes29 _action = BridgeMessage.formatTransfer(
            _recipient,
            _amount,
            _detailsHash
        );
        // send message to destination chain bridge router
        _sendTransferMessage(_destination, _tokenId, _action);
        // emit Send event to record token sender
        emit Send(_token, msg.sender, _destination, _recipient, _amount);
    }

    // ===== SendToHook ======

    /**
     * @notice Send tokens to a hook on the remote chain
     * @param _token The token address
     * @param _amount The token amount
     * @param _destination The destination domain
     * @param _remoteHook The hook contract on the remote chain
     * @param _extraData Extra data that will be passed to the hook for
     *        execution
     */
    function sendToHook(
        address _token,
        uint256 _amount,
        uint32 _destination,
        bytes32 _remoteHook,
        bytes calldata _extraData
    ) external {
        // debit tokens from msg.sender
        (bytes29 _tokenId, bytes32 _detailsHash) = _takeTokens(_token, _amount);
        // format Hook transfer message
        bytes29 _action = BridgeMessage.formatTransferToHook(
            _remoteHook,
            _amount,
            _detailsHash,
            TypeCasts.addressToBytes32(msg.sender),
            _extraData
        );
        // send message to destination chain bridge router
        _sendTransferMessage(_destination, _tokenId, _action);
        // emit Send event to record token sender
        emit Send(_token, msg.sender, _destination, _remoteHook, _amount);
    }

    // ======== Internal Handlers =========

    // ===== handleTransfer ======
    function _handleTransfer(
        uint32 _origin,
        uint32 _nonce,
        bytes29 _tokenId,
        bytes29 _action
    ) internal {
        // tokens will be sent to the specified recipient
        address _recipient = _action.evmRecipient();
        // send tokens
        _giveTokens(_origin, _nonce, _tokenId, _action, _recipient);
    }

    // ===== handleUpdateSupply ======

    function _handleUpdateSupply(bytes29 _tokenId, bytes29 _action) internal {
        address _token = tokenRegistry.ensureLocalToken(
            _tokenId.domain(),
            _tokenId.id()
        );

        require(!tokenRegistry.isLocalOrigin(_token), "LOCAL_ORIGIN");
        ABridgeToken(_token).updateSupply(_action.supply());
    }

    // ======== Internal Helpers =========

    function _giveTokens(
        uint32 _origin,
        uint32 _nonce,
        bytes29 _tokenId,
        bytes29 _action,
        address _recipient
    ) internal returns (address _token) {
        // get the token contract for the given tokenId on this chain;
        // (if the token is of remote origin and there is
        // no existing representation token contract, the TokenRegistry will
        // deploy a new one)
        _token = tokenRegistry.ensureLocalToken(
            _tokenId.domain(),
            _tokenId.id()
        );
        // load amount once
        uint256 _amount = _action.amnt();
        // send the tokens into circulation on this chain
        if (tokenRegistry.isLocalOrigin(_token)) {
            // if the token is of local origin, the tokens have been held in
            // escrow in this contract
            // while they have been circulating on remote chains;
            // transfer the tokens to the recipient
            IERC20(_token).safeTransfer(_recipient, _amount);
        } else {
            // if the token is of remote origin, mint the tokens to the
            // recipient on this chain
            ABridgeToken(_token).mint(_recipient, _amount);
            // Tell the token what its detailsHash is
            ABridgeToken(_token).setDetailsHash(_action.detailsHash());
        }
        // emit Receive event
        emit Receive(
            _originAndNonce(_origin, _nonce),
            _token,
            _recipient,
            _amount
        );
    }

    /**
     * @notice Take from msg.sender as part of sending tokens across chains
     * @dev Locks canonical tokens in escrow in BridgeRouter
     *      OR Burns representation tokens
     * @param _token The token to pull from the sender
     * @param _amount The amount to pull from the sender
     * @return _tokenId the bytes canonical token identifier
     * @return _detailsHash the hash of the canonical token details (name,
     *         symbol, decimal)
     */
    function _takeTokens(address _token, uint256 _amount)
        internal
        returns (bytes29 _tokenId, bytes32 _detailsHash)
    {
        // ensure that amount is non-zero
        require(_amount > 0, "!amnt");
        // Setup vars used in both if branches
        ABridgeToken _t = ABridgeToken(_token);
        // remove tokens from circulation on this chain
        if (tokenRegistry.isLocalOrigin(_token)) {
            // if the token originates on this chain,
            // hold the tokens in escrow in the Router
            IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
            // query token contract for details and calculate detailsHash
            _detailsHash = BridgeMessage.getDetailsHash(
                _t.name(),
                _t.symbol(),
                _t.decimals()
            );
        } else {
            // if the token originates on a remote chain,
            // burn the representation tokens on this chain
            _t.burn(msg.sender, _amount);
            _detailsHash = _t.detailsHash();
        }
        // get the tokenID
        (uint32 _domain, bytes32 _id) = tokenRegistry.getTokenId(_token);
        _tokenId = BridgeMessage.formatTokenId(_domain, _id);
    }

    /**
     * @notice Dispatch a message via Nomad to a destination domain
     *         addressed to the remote BridgeRouter on that chain
     * @dev Message will trigger `handle` method on the remote BridgeRouter
     *      when it is received on the destination chain
     * @param _destination The domain of the destination chain
     * @param _tokenId The canonical token identifier for the transfer message
     * @param _action The contents of the transfer message
     */
    function _sendTransferMessage(
        uint32 _destination,
        bytes29 _tokenId,
        bytes29 _action
    ) internal {
        // get remote BridgeRouter address; revert if not found
        bytes32 _remote = _mustHaveRemote(_destination);
        // send message to remote chain via Nomad
        Home(xAppConnectionManager.home()).dispatch(
            _destination,
            _remote,
            BridgeMessage.formatMessage(_tokenId, _action)
        );
    }

    // ============ Internal: Utils ============

    /**
     * @dev should be impossible to renounce ownership;
     *      we override OpenZeppelin OwnableUpgradeable's
     *      implementation of renounceOwnership to make it a no-op
     */
    function renounceOwnership() public override onlyOwner {
        // do nothing
    }

    function _originAndNonce(uint32 _origin, uint32 _nonce)
        internal
        pure
        returns (uint64)
    {
        return (uint64(_origin) << 32) | _nonce;
    }
}
