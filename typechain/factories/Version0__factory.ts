/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { Version0 } from "../Version0";

export class Version0__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Version0 {
    return new Contract(address, _abi, signerOrProvider) as Version0;
  }
}

const _abi = [
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];