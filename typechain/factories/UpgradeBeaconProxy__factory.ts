/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { UpgradeBeaconProxy } from "../UpgradeBeaconProxy";

export class UpgradeBeaconProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _upgradeBeacon: string,
    _initializationCalldata: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<UpgradeBeaconProxy> {
    return super.deploy(
      _upgradeBeacon,
      _initializationCalldata,
      overrides || {}
    ) as Promise<UpgradeBeaconProxy>;
  }
  getDeployTransaction(
    _upgradeBeacon: string,
    _initializationCalldata: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _upgradeBeacon,
      _initializationCalldata,
      overrides || {}
    );
  }
  attach(address: string): UpgradeBeaconProxy {
    return super.attach(address) as UpgradeBeaconProxy;
  }
  connect(signer: Signer): UpgradeBeaconProxy__factory {
    return super.connect(signer) as UpgradeBeaconProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeBeaconProxy {
    return new Contract(address, _abi, signerOrProvider) as UpgradeBeaconProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_upgradeBeacon",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_initializationCalldata",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405260405162000b0a38038062000b0a8339818101604052810190620000299190620004c9565b6200003f826200014960201b6200002f1760201c565b62000081576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000789062000590565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506000620000c8836200016c60201b60201c565b9050620000e0816200014960201b6200002f1760201c565b62000122576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001199062000602565b60405180910390fd5b60008251111562000140576200013f81836200024360201b60201c565b5b505050620007b2565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff16604051620001969062000659565b600060405180830381855afa9150503d8060008114620001d3576040519150601f19603f3d011682016040523d82523d6000602084013e620001d8565b606091505b509150915081819062000223576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200021a9190620006bc565b60405180910390fd5b50808060200190518101906200023a919062000725565b92505050919050565b60008273ffffffffffffffffffffffffffffffffffffffff16826040516200026c919062000799565b600060405180830381855af49150503d8060008114620002a9576040519150601f19603f3d011682016040523d82523d6000602084013e620002ae565b606091505b5050905080620002c2573d6000803e3d6000fd5b505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200030882620002db565b9050919050565b6200031a81620002fb565b81146200032657600080fd5b50565b6000815190506200033a816200030f565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000395826200034a565b810181811067ffffffffffffffff82111715620003b757620003b66200035b565b5b80604052505050565b6000620003cc620002c7565b9050620003da82826200038a565b919050565b600067ffffffffffffffff821115620003fd57620003fc6200035b565b5b62000408826200034a565b9050602081019050919050565b60005b838110156200043557808201518184015260208101905062000418565b8381111562000445576000848401525b50505050565b6000620004626200045c84620003df565b620003c0565b90508281526020810184848401111562000481576200048062000345565b5b6200048e84828562000415565b509392505050565b600082601f830112620004ae57620004ad62000340565b5b8151620004c08482602086016200044b565b91505092915050565b60008060408385031215620004e357620004e2620002d1565b5b6000620004f38582860162000329565b925050602083015167ffffffffffffffff811115620005175762000516620002d6565b5b620005258582860162000496565b9150509250929050565b600082825260208201905092915050565b7f626561636f6e2021636f6e747261637400000000000000000000000000000000600082015250565b6000620005786010836200052f565b9150620005858262000540565b602082019050919050565b60006020820190508181036000830152620005ab8162000569565b9050919050565b7f626561636f6e20696d706c656d656e746174696f6e2021636f6e747261637400600082015250565b6000620005ea601f836200052f565b9150620005f782620005b2565b602082019050919050565b600060208201905081810360008301526200061d81620005db565b9050919050565b600081905092915050565b50565b60006200064160008362000624565b91506200064e826200062f565b600082019050919050565b6000620006668262000632565b9150819050919050565b600081519050919050565b6000620006888262000670565b6200069481856200052f565b9350620006a681856020860162000415565b620006b1816200034a565b840191505092915050565b60006020820190508181036000830152620006d881846200067b565b905092915050565b6000620006ed82620002db565b9050919050565b620006ff81620006e0565b81146200070b57600080fd5b50565b6000815190506200071f81620006f4565b92915050565b6000602082840312156200073e576200073d620002d1565b5b60006200074e848285016200070e565b91505092915050565b600081519050919050565b60006200076f8262000757565b6200077b818562000624565b93506200078d81856020860162000415565b80840191505092915050565b6000620007a7828462000762565b915081905092915050565b60805161033d620007cd60003960006059015261033d6000f3fe6080604052366100135761001161001d565b005b61001b61001d565b005b61002d610028610052565b610082565b565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061007d7f00000000000000000000000000000000000000000000000000000000000000006100a8565b905090565b3660008037600080366000845af43d6000803e80600081146100a3573d6000f35b3d6000fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff166040516100d0906101a7565b600060405180830381855afa9150503d806000811461010b576040519150601f19603f3d011682016040523d82523d6000602084013e610110565b606091505b5091509150818190610158576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014f9190610255565b60405180910390fd5b508080602001905181019061016d91906102da565b92505050919050565b600081905092915050565b50565b6000610191600083610176565b915061019c82610181565b600082019050919050565b60006101b282610184565b9150819050919050565b600081519050919050565b600082825260208201905092915050565b60005b838110156101f65780820151818401526020810190506101db565b83811115610205576000848401525b50505050565b6000601f19601f8301169050919050565b6000610227826101bc565b61023181856101c7565b93506102418185602086016101d8565b61024a8161020b565b840191505092915050565b6000602082019050818103600083015261026f818461021c565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102a78261027c565b9050919050565b6102b78161029c565b81146102c257600080fd5b50565b6000815190506102d4816102ae565b92915050565b6000602082840312156102f0576102ef610277565b5b60006102fe848285016102c5565b9150509291505056fea2646970667358221220bcb9f2f146572a5dcc09b024584674fb34ec57498b63ca92348272b081f3418364736f6c634300080f0033";