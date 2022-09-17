pragma solidity 0.8.15;

// ============ Internal Imports ============
// import {BridgeMessage} from "./BridgeMessage.sol";
import {ABridgeToken} from "./ABridgeToken.sol";
import {TokenRegistry} from "./TokenRegistry.sol";

// ============ External Imports ============
import {XAppConnectionClient} from "@nomad-xyz/contracts-router/contracts/XAppConnectionClient.sol";
import {Router} from "@nomad-xyz/contracts-router/contracts/Router.sol";
import {Home} from "@nomad-xyz/contracts-core/contracts/Home.sol";
import {Version0} from "@nomad-xyz/contracts-core/contracts/Version0.sol";
import {TypedMemView} from "@summa-tx/memview-sol/contracts/TypedMemView.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

contract ABridgeRouter {
    // mapping tracking the amount of shares for a canonical aToken locked up to a destination.
    // Used to calculate the current supply for representation tokens
    mapping(bytes32 => uint256) private canonicalSharesAtDestination;
}
