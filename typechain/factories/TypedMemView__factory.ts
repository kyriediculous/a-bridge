/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TypedMemView } from "../TypedMemView";

export class TypedMemView__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TypedMemView> {
    return super.deploy(overrides || {}) as Promise<TypedMemView>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TypedMemView {
    return super.attach(address) as TypedMemView;
  }
  connect(signer: Signer): TypedMemView__factory {
    return super.connect(signer) as TypedMemView__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TypedMemView {
    return new Contract(address, _abi, signerOrProvider) as TypedMemView;
  }
}

const _abi = [
  {
    inputs: [],
    name: "NULL",
    outputs: [
      {
        internalType: "bytes29",
        name: "",
        type: "bytes29",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60fe610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063f26be3fc146038575b600080fd5b603e6052565b6040516049919060af565b60405180910390f35b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000081565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082169050919050565b60a9816076565b82525050565b600060208201905060c2600083018460a2565b9291505056fea2646970667358221220d5a32e6ad3d98410ff57934bbdb3d06151377d271260f0981069de35492c275f64736f6c634300080f0033";
