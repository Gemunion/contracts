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
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DexInterface extends ethers.utils.Interface {
  functions: {
    "acceptedToken()": FunctionFragment;
    "buy()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sell(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "acceptedToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "buy", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "priceOracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
  encodeFunctionData(functionFragment: "sell", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "acceptedToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceOracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sell", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Bought(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "PaymentReceived(address,uint256)": EventFragment;
    "Sold(uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bought"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type BoughtEvent = TypedEvent<[BigNumber] & { amount: BigNumber }>;

export type OwnershipTransferredEvent = TypedEvent<[string, string] & { previousOwner: string; newOwner: string }>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type PaymentReceivedEvent = TypedEvent<[string, BigNumber] & { from: string; amount: BigNumber }>;

export type SoldEvent = TypedEvent<[BigNumber] & { amount: BigNumber }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class Dex extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
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
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DexInterface;

  functions: {
    acceptedToken(overrides?: CallOverrides): Promise<[string]>;

    buy(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    initialize(
      _acceptedToken: string,
      _priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    sell(
      amountOfToken: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;
  };

  acceptedToken(overrides?: CallOverrides): Promise<string>;

  buy(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  initialize(
    _acceptedToken: string,
    _priceOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  sell(
    amountOfToken: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  callStatic: {
    acceptedToken(overrides?: CallOverrides): Promise<string>;

    buy(overrides?: CallOverrides): Promise<void>;

    initialize(_acceptedToken: string, _priceOracle: string, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sell(amountOfToken: BigNumberish, overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Bought(uint256)"(amount?: null): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    Bought(amount?: null): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

    "Paused(address)"(account?: null): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "PaymentReceived(address,uint256)"(
      from?: null,
      amount?: null,
    ): TypedEventFilter<[string, BigNumber], { from: string; amount: BigNumber }>;

    PaymentReceived(
      from?: null,
      amount?: null,
    ): TypedEventFilter<[string, BigNumber], { from: string; amount: BigNumber }>;

    "Sold(uint256)"(amount?: null): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    Sold(amount?: null): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    "Unpaused(address)"(account?: null): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    acceptedToken(overrides?: CallOverrides): Promise<BigNumber>;

    buy(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    initialize(
      _acceptedToken: string,
      _priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    sell(amountOfToken: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buy(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    initialize(
      _acceptedToken: string,
      _priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    sell(
      amountOfToken: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;
  };
}
