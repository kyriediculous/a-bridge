/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ABridgeRouterInterface extends ethers.utils.Interface {
  functions: {
    "enrollRemoteRouter(uint32,bytes32)": FunctionFragment;
    "handle(uint32,uint32,bytes32,bytes)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "remotes(uint32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "send(address,uint256,uint32,bytes32,bool)": FunctionFragment;
    "sendToHook(address,uint256,uint32,bytes32,bytes)": FunctionFragment;
    "setXAppConnectionManager(address)": FunctionFragment;
    "tokenRegistry()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "xAppConnectionManager()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "enrollRemoteRouter",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "handle",
    values: [BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remotes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [string, BigNumberish, BigNumberish, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "sendToHook",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setXAppConnectionManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "xAppConnectionManager",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "enrollRemoteRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remotes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendToHook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setXAppConnectionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "xAppConnectionManager",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Receive(uint64,address,address,uint256)": EventFragment;
    "Send(address,address,uint32,bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Receive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Send"): EventFragment;
}

export class ABridgeRouter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ABridgeRouterInterface;

  functions: {
    enrollRemoteRouter(
      _domain: BigNumberish,
      _router: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "enrollRemoteRouter(uint32,bytes32)"(
      _domain: BigNumberish,
      _router: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    handle(
      _origin: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "handle(uint32,uint32,bytes32,bytes)"(
      _origin: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _tokenRegistry: string,
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address,address)"(
      _tokenRegistry: string,
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    remotes(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "remotes(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    send(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _recipient: BytesLike,
      arg4: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "send(address,uint256,uint32,bytes32,bool)"(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _recipient: BytesLike,
      arg4: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendToHook(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _remoteHook: BytesLike,
      _extraData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "sendToHook(address,uint256,uint32,bytes32,bytes)"(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _remoteHook: BytesLike,
      _extraData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setXAppConnectionManager(address)"(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenRegistry(overrides?: CallOverrides): Promise<[string]>;

    "tokenRegistry()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<[string]>;

    "xAppConnectionManager()"(overrides?: CallOverrides): Promise<[string]>;
  };

  enrollRemoteRouter(
    _domain: BigNumberish,
    _router: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "enrollRemoteRouter(uint32,bytes32)"(
    _domain: BigNumberish,
    _router: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  handle(
    _origin: BigNumberish,
    _nonce: BigNumberish,
    _sender: BytesLike,
    _message: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "handle(uint32,uint32,bytes32,bytes)"(
    _origin: BigNumberish,
    _nonce: BigNumberish,
    _sender: BytesLike,
    _message: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _tokenRegistry: string,
    _xAppConnectionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address,address)"(
    _tokenRegistry: string,
    _xAppConnectionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  remotes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "remotes(uint32)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  send(
    _token: string,
    _amount: BigNumberish,
    _destination: BigNumberish,
    _recipient: BytesLike,
    arg4: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "send(address,uint256,uint32,bytes32,bool)"(
    _token: string,
    _amount: BigNumberish,
    _destination: BigNumberish,
    _recipient: BytesLike,
    arg4: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendToHook(
    _token: string,
    _amount: BigNumberish,
    _destination: BigNumberish,
    _remoteHook: BytesLike,
    _extraData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "sendToHook(address,uint256,uint32,bytes32,bytes)"(
    _token: string,
    _amount: BigNumberish,
    _destination: BigNumberish,
    _remoteHook: BytesLike,
    _extraData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setXAppConnectionManager(
    _xAppConnectionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setXAppConnectionManager(address)"(
    _xAppConnectionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenRegistry(overrides?: CallOverrides): Promise<string>;

  "tokenRegistry()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  xAppConnectionManager(overrides?: CallOverrides): Promise<string>;

  "xAppConnectionManager()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    enrollRemoteRouter(
      _domain: BigNumberish,
      _router: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "enrollRemoteRouter(uint32,bytes32)"(
      _domain: BigNumberish,
      _router: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    handle(
      _origin: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "handle(uint32,uint32,bytes32,bytes)"(
      _origin: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _tokenRegistry: string,
      _xAppConnectionManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address)"(
      _tokenRegistry: string,
      _xAppConnectionManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    remotes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "remotes(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    send(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _recipient: BytesLike,
      arg4: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "send(address,uint256,uint32,bytes32,bool)"(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _recipient: BytesLike,
      arg4: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    sendToHook(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _remoteHook: BytesLike,
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "sendToHook(address,uint256,uint32,bytes32,bytes)"(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _remoteHook: BytesLike,
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setXAppConnectionManager(address)"(
      _xAppConnectionManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenRegistry(overrides?: CallOverrides): Promise<string>;

    "tokenRegistry()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<string>;

    "xAppConnectionManager()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Initialized(version: null): TypedEventFilter<[number], { version: number }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    Receive(
      originAndNonce: BigNumberish | null,
      token: string | null,
      recipient: string | null,
      amount: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber],
      {
        originAndNonce: BigNumber;
        token: string;
        recipient: string;
        amount: BigNumber;
      }
    >;

    Send(
      token: string | null,
      from: string | null,
      toDomain: BigNumberish | null,
      toId: null,
      amount: null
    ): TypedEventFilter<
      [string, string, number, string, BigNumber],
      {
        token: string;
        from: string;
        toDomain: number;
        toId: string;
        amount: BigNumber;
      }
    >;
  };

  estimateGas: {
    enrollRemoteRouter(
      _domain: BigNumberish,
      _router: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "enrollRemoteRouter(uint32,bytes32)"(
      _domain: BigNumberish,
      _router: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    handle(
      _origin: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "handle(uint32,uint32,bytes32,bytes)"(
      _origin: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _tokenRegistry: string,
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address,address)"(
      _tokenRegistry: string,
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    remotes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "remotes(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    send(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _recipient: BytesLike,
      arg4: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "send(address,uint256,uint32,bytes32,bool)"(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _recipient: BytesLike,
      arg4: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendToHook(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _remoteHook: BytesLike,
      _extraData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "sendToHook(address,uint256,uint32,bytes32,bytes)"(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _remoteHook: BytesLike,
      _extraData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setXAppConnectionManager(address)"(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<BigNumber>;

    "xAppConnectionManager()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    enrollRemoteRouter(
      _domain: BigNumberish,
      _router: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "enrollRemoteRouter(uint32,bytes32)"(
      _domain: BigNumberish,
      _router: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    handle(
      _origin: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "handle(uint32,uint32,bytes32,bytes)"(
      _origin: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _tokenRegistry: string,
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address,address)"(
      _tokenRegistry: string,
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remotes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "remotes(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    send(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _recipient: BytesLike,
      arg4: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "send(address,uint256,uint32,bytes32,bool)"(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _recipient: BytesLike,
      arg4: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendToHook(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _remoteHook: BytesLike,
      _extraData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "sendToHook(address,uint256,uint32,bytes32,bytes)"(
      _token: string,
      _amount: BigNumberish,
      _destination: BigNumberish,
      _remoteHook: BytesLike,
      _extraData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setXAppConnectionManager(address)"(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenRegistry()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    xAppConnectionManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "xAppConnectionManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
