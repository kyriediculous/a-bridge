pragma solidity 0.8.15;

import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./AERC20.sol";

contract BridgeAToken is OwnableUpgradeable, AERC20 {
    // ============ Immutables ============

    // Immutables used in EIP 712 structured data hashing & signing
    // https://eips.ethereum.org/EIPS/eip-712
    bytes32 public immutable _PERMIT_TYPEHASH =
        keccak256(
            "Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"
        );
    bytes32 private immutable _EIP712_STRUCTURED_DATA_VERSION =
        keccak256(bytes("1"));
    uint16 private immutable _EIP712_PREFIX_AND_VERSION = uint16(0x1901);

    // ============ Public Storage ============

    mapping(address => uint256) public nonces;
    /// @dev hash commitment to the name/symbol/decimals
    bytes32 public detailsHash;

    // ============ Initializer ============

    function initialize() public initializer {
        __Ownable_init();
    }

    // ============ Events ============

    event UpdateDetails(
        string indexed name,
        string indexed symbol,
        uint8 indexed decimals
    );

    // ============ External Functions ============

    /**
     * @notice Destroys `_amnt` tokens from `_from`, reducing the
     * total supply.
     * @dev Emits a {Transfer} event with `to` set to the zero address.
     * Requirements:
     * - `_from` cannot be the zero address.
     * - `_from` must have at least `_amnt` tokens.
     * @param _from The address from which to destroy the tokens
     * @param _amnt The amount of tokens to be destroyed
     */
    function burn(address _from, uint256 _amnt) external onlyOwner {
        _burnShares(_from, _tokensToShares(_amnt));
    }

    /** @notice Creates `_amnt` tokens and assigns them to `_to`, increasing
     * the total supply.
     * @dev Emits a {Transfer} event with `from` set to the zero address.
     * Requirements:
     * - `to` cannot be the zero address.
     * @param _to The destination address
     * @param _amnt The amount of tokens to be minted
     */
    function mint(address _to, uint256 _amnt) external onlyOwner {
        _mintShares(_to, _tokensToShares(_amnt));
    }

    /** @notice allows the owner to set the details hash commitment.
     * @param _detailsHash the new details hash.
     */
    function setDetailsHash(bytes32 _detailsHash) external onlyOwner {
        if (detailsHash != _detailsHash) {
            detailsHash = _detailsHash;
        }
    }

    // /**
    //  * @notice Set the details of a token
    //  * @param _newName The new name
    //  * @param _newSymbol The new symbol
    //  * @param _newDecimals The new decimals
    //  */
    // function setDetails(
    //     string calldata _newName,
    //     string calldata _newSymbol,
    //     uint8 _newDecimals
    // ) external override {
    //     bool _isFirstDetails = bytes(token.name).length == 0;
    //     // 0 case is the initial deploy. We allow the deploying registry to set
    //     // these once. After the first transfer is made, detailsHash will be
    //     // set, allowing anyone to supply correct name/symbols/decimals
    //     require(
    //         _isFirstDetails ||
    //             BridgeMessage.getDetailsHash(
    //                 _newName,
    //                 _newSymbol,
    //                 _newDecimals
    //             ) ==
    //             detailsHash,
    //         "!committed details"
    //     );
    //     // careful with naming convention change here
    //     token.name = _newName;
    //     token.symbol = _newSymbol;
    //     token.decimals = _newDecimals;
    //     if (!_isFirstDetails) {
    //         emit UpdateDetails(_newName, _newSymbol, _newDecimals);
    //     }
    // }

    /**
     * @notice Sets approval from owner to spender to value
     * as long as deadline has not passed
     * by submitting a valid signature from owner
     * Uses EIP 712 structured data hashing & signing
     * https://eips.ethereum.org/EIPS/eip-712
     * @param _owner The account setting approval & signing the message
     * @param _spender The account receiving approval to spend owner's tokens
     * @param _value The amount to set approval for
     * @param _deadline The timestamp before which the signature must be submitted
     * @param _v ECDSA signature v
     * @param _r ECDSA signature r
     * @param _s ECDSA signature s
     */
    function permit(
        address _owner,
        address _spender,
        uint256 _value,
        uint256 _deadline,
        uint8 _v,
        bytes32 _r,
        bytes32 _s
    ) external {
        require(block.timestamp <= _deadline, "ERC20Permit: expired deadline");
        require(_owner != address(0), "ERC20Permit: owner zero address");
        uint256 _nonce = nonces[_owner];
        bytes32 _hashStruct = keccak256(
            abi.encode(
                _PERMIT_TYPEHASH,
                _owner,
                _spender,
                _value,
                _nonce,
                _deadline
            )
        );
        bytes32 _digest = keccak256(
            abi.encodePacked(
                _EIP712_PREFIX_AND_VERSION,
                domainSeparator(),
                _hashStruct
            )
        );
        address _signer = ecrecover(_digest, _v, _r, _s);
        require(_signer == _owner, "ERC20Permit: invalid signature");
        nonces[_owner] = _nonce + 1;
        _approve(_owner, _spender, _value);
    }

    /**
     * @dev This is ALWAYS calculated at runtime
     * because the token name may change
     */
    function domainSeparator() public view returns (bytes32) {
        uint256 _chainId;
        assembly {
            _chainId := chainid()
        }
        return
            keccak256(
                abi.encode(
                    keccak256(
                        "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
                    ),
                    keccak256(bytes(token.name)),
                    _EIP712_STRUCTURED_DATA_VERSION,
                    _chainId,
                    address(this)
                )
            );
    }

    // required for solidity inheritance
    function transferOwnership(address _newOwner) public override onlyOwner {
        OwnableUpgradeable.transferOwnership(_newOwner);
    }

    /**
     * @dev should be impossible to renounce ownership;
     * we override OpenZeppelin OwnableUpgradeable's
     * implementation of renounceOwnership to make it a no-op
     */
    function renounceOwnership() public override onlyOwner {
        // do nothing
    }
}
