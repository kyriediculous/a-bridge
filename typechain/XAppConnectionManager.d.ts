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

interface XAppConnectionManagerInterface extends ethers.utils.Interface {
  functions: {
    "domainToReplica(uint32)": FunctionFragment;
    "home()": FunctionFragment;
    "isReplica(address)": FunctionFragment;
    "localDomain()": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerEnrollReplica(address,uint32)": FunctionFragment;
    "ownerUnenrollReplica(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "replicaToDomain(address)": FunctionFragment;
    "setHome(address)": FunctionFragment;
    "setWatcherPermission(address,uint32,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unenrollReplica(uint32,bytes32,bytes)": FunctionFragment;
    "watcherPermission(address,uint32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "domainToReplica",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "home", values?: undefined): string;
  encodeFunctionData(functionFragment: "isReplica", values: [string]): string;
  encodeFunctionData(
    functionFragment: "localDomain",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerEnrollReplica",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerUnenrollReplica",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "replicaToDomain",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setHome", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setWatcherPermission",
    values: [string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unenrollReplica",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "watcherPermission",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "domainToReplica",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "home", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isReplica", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "localDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerEnrollReplica",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerUnenrollReplica",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replicaToDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setHome", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWatcherPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unenrollReplica",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "watcherPermission",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "ReplicaEnrolled(uint32,address)": EventFragment;
    "ReplicaUnenrolled(uint32,address)": EventFragment;
    "WatcherPermissionSet(uint32,address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReplicaEnrolled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReplicaUnenrolled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WatcherPermissionSet"): EventFragment;
}

export class XAppConnectionManager extends Contract {
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

  interface: XAppConnectionManagerInterface;

  functions: {
    domainToReplica(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "domainToReplica(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    home(overrides?: CallOverrides): Promise<[string]>;

    "home()"(overrides?: CallOverrides): Promise<[string]>;

    isReplica(_replica: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isReplica(address)"(
      _replica: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    localDomain(overrides?: CallOverrides): Promise<[number]>;

    "localDomain()"(overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    ownerEnrollReplica(
      _replica: string,
      _domain: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "ownerEnrollReplica(address,uint32)"(
      _replica: string,
      _domain: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ownerUnenrollReplica(
      _replica: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "ownerUnenrollReplica(address)"(
      _replica: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    replicaToDomain(arg0: string, overrides?: CallOverrides): Promise<[number]>;

    "replicaToDomain(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    setHome(
      _home: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setHome(address)"(
      _home: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWatcherPermission(
      _watcher: string,
      _domain: BigNumberish,
      _access: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setWatcherPermission(address,uint32,bool)"(
      _watcher: string,
      _domain: BigNumberish,
      _access: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unenrollReplica(
      _domain: BigNumberish,
      _updater: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unenrollReplica(uint32,bytes32,bytes)"(
      _domain: BigNumberish,
      _updater: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    watcherPermission(
      _watcher: string,
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "watcherPermission(address,uint32)"(
      _watcher: string,
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  domainToReplica(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "domainToReplica(uint32)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  home(overrides?: CallOverrides): Promise<string>;

  "home()"(overrides?: CallOverrides): Promise<string>;

  isReplica(_replica: string, overrides?: CallOverrides): Promise<boolean>;

  "isReplica(address)"(
    _replica: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  localDomain(overrides?: CallOverrides): Promise<number>;

  "localDomain()"(overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  ownerEnrollReplica(
    _replica: string,
    _domain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "ownerEnrollReplica(address,uint32)"(
    _replica: string,
    _domain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ownerUnenrollReplica(
    _replica: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "ownerUnenrollReplica(address)"(
    _replica: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  replicaToDomain(arg0: string, overrides?: CallOverrides): Promise<number>;

  "replicaToDomain(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<number>;

  setHome(
    _home: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setHome(address)"(
    _home: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWatcherPermission(
    _watcher: string,
    _domain: BigNumberish,
    _access: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setWatcherPermission(address,uint32,bool)"(
    _watcher: string,
    _domain: BigNumberish,
    _access: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unenrollReplica(
    _domain: BigNumberish,
    _updater: BytesLike,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unenrollReplica(uint32,bytes32,bytes)"(
    _domain: BigNumberish,
    _updater: BytesLike,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  watcherPermission(
    _watcher: string,
    _domain: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "watcherPermission(address,uint32)"(
    _watcher: string,
    _domain: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    domainToReplica(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "domainToReplica(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    home(overrides?: CallOverrides): Promise<string>;

    "home()"(overrides?: CallOverrides): Promise<string>;

    isReplica(_replica: string, overrides?: CallOverrides): Promise<boolean>;

    "isReplica(address)"(
      _replica: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    localDomain(overrides?: CallOverrides): Promise<number>;

    "localDomain()"(overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    ownerEnrollReplica(
      _replica: string,
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "ownerEnrollReplica(address,uint32)"(
      _replica: string,
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    ownerUnenrollReplica(
      _replica: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "ownerUnenrollReplica(address)"(
      _replica: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    replicaToDomain(arg0: string, overrides?: CallOverrides): Promise<number>;

    "replicaToDomain(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<number>;

    setHome(_home: string, overrides?: CallOverrides): Promise<void>;

    "setHome(address)"(_home: string, overrides?: CallOverrides): Promise<void>;

    setWatcherPermission(
      _watcher: string,
      _domain: BigNumberish,
      _access: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setWatcherPermission(address,uint32,bool)"(
      _watcher: string,
      _domain: BigNumberish,
      _access: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unenrollReplica(
      _domain: BigNumberish,
      _updater: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "unenrollReplica(uint32,bytes32,bytes)"(
      _domain: BigNumberish,
      _updater: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    watcherPermission(
      _watcher: string,
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "watcherPermission(address,uint32)"(
      _watcher: string,
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    ReplicaEnrolled(
      domain: BigNumberish | null,
      replica: null
    ): TypedEventFilter<[number, string], { domain: number; replica: string }>;

    ReplicaUnenrolled(
      domain: BigNumberish | null,
      replica: null
    ): TypedEventFilter<[number, string], { domain: number; replica: string }>;

    WatcherPermissionSet(
      domain: BigNumberish | null,
      watcher: null,
      access: null
    ): TypedEventFilter<
      [number, string, boolean],
      { domain: number; watcher: string; access: boolean }
    >;
  };

  estimateGas: {
    domainToReplica(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "domainToReplica(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    home(overrides?: CallOverrides): Promise<BigNumber>;

    "home()"(overrides?: CallOverrides): Promise<BigNumber>;

    isReplica(_replica: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isReplica(address)"(
      _replica: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    localDomain(overrides?: CallOverrides): Promise<BigNumber>;

    "localDomain()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    ownerEnrollReplica(
      _replica: string,
      _domain: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "ownerEnrollReplica(address,uint32)"(
      _replica: string,
      _domain: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ownerUnenrollReplica(
      _replica: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "ownerUnenrollReplica(address)"(
      _replica: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    replicaToDomain(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "replicaToDomain(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setHome(
      _home: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setHome(address)"(
      _home: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWatcherPermission(
      _watcher: string,
      _domain: BigNumberish,
      _access: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setWatcherPermission(address,uint32,bool)"(
      _watcher: string,
      _domain: BigNumberish,
      _access: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unenrollReplica(
      _domain: BigNumberish,
      _updater: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unenrollReplica(uint32,bytes32,bytes)"(
      _domain: BigNumberish,
      _updater: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    watcherPermission(
      _watcher: string,
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "watcherPermission(address,uint32)"(
      _watcher: string,
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    domainToReplica(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "domainToReplica(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    home(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "home()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isReplica(
      _replica: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isReplica(address)"(
      _replica: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "localDomain()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerEnrollReplica(
      _replica: string,
      _domain: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "ownerEnrollReplica(address,uint32)"(
      _replica: string,
      _domain: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ownerUnenrollReplica(
      _replica: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "ownerUnenrollReplica(address)"(
      _replica: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    replicaToDomain(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "replicaToDomain(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setHome(
      _home: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setHome(address)"(
      _home: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWatcherPermission(
      _watcher: string,
      _domain: BigNumberish,
      _access: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setWatcherPermission(address,uint32,bool)"(
      _watcher: string,
      _domain: BigNumberish,
      _access: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unenrollReplica(
      _domain: BigNumberish,
      _updater: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unenrollReplica(uint32,bytes32,bytes)"(
      _domain: BigNumberish,
      _updater: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    watcherPermission(
      _watcher: string,
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "watcherPermission(address,uint32)"(
      _watcher: string,
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}