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
    "initialize(address,address,address[],uint256[])": FunctionFragment;
    "paused()": FunctionFragment;
    "payee(uint256)": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "release(address)": FunctionFragment;
    "released(address)": FunctionFragment;
    "sell(uint256)": FunctionFragment;
    "shares(address)": FunctionFragment;
    "totalReleased()": FunctionFragment;
    "totalShares()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "acceptedToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "buy", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string, string, string[], BigNumberish[]]): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "payee", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "priceOracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "release", values: [string]): string;
  encodeFunctionData(functionFragment: "released", values: [string]): string;
  encodeFunctionData(functionFragment: "sell", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "shares", values: [string]): string;
  encodeFunctionData(functionFragment: "totalReleased", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalShares", values?: undefined): string;

  decodeFunctionResult(functionFragment: "acceptedToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceOracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sell", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalReleased", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalShares", data: BytesLike): Result;

  events: {
    "Bought(uint256)": EventFragment;
    "Paused(address)": EventFragment;
    "PayeeAdded(address,uint256)": EventFragment;
    "PaymentReceived(address,uint256)": EventFragment;
    "PaymentReleased(address,uint256)": EventFragment;
    "Sold(uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bought"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayeeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type BoughtEvent = TypedEvent<[BigNumber] & { amount: BigNumber }>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type PayeeAddedEvent = TypedEvent<[string, BigNumber] & { account: string; shares: BigNumber }>;

export type PaymentReceivedEvent = TypedEvent<[string, BigNumber] & { from: string; amount: BigNumber }>;

export type PaymentReleasedEvent = TypedEvent<[string, BigNumber] & { to: string; amount: BigNumber }>;

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
      payees: string[],
      shares_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    payee(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    release(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    released(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    sell(
      amountOfToken: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    shares(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalReleased(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  acceptedToken(overrides?: CallOverrides): Promise<string>;

  buy(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  initialize(
    _acceptedToken: string,
    _priceOracle: string,
    payees: string[],
    shares_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  release(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  sell(
    amountOfToken: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    acceptedToken(overrides?: CallOverrides): Promise<string>;

    buy(overrides?: CallOverrides): Promise<void>;

    initialize(
      _acceptedToken: string,
      _priceOracle: string,
      payees: string[],
      shares_: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    release(account: string, overrides?: CallOverrides): Promise<void>;

    released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    sell(amountOfToken: BigNumberish, overrides?: CallOverrides): Promise<void>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Bought(uint256)"(amount?: null): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    Bought(amount?: null): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    "Paused(address)"(account?: null): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "PayeeAdded(address,uint256)"(
      account?: null,
      shares?: null,
    ): TypedEventFilter<[string, BigNumber], { account: string; shares: BigNumber }>;

    PayeeAdded(
      account?: null,
      shares?: null,
    ): TypedEventFilter<[string, BigNumber], { account: string; shares: BigNumber }>;

    "PaymentReceived(address,uint256)"(
      from?: null,
      amount?: null,
    ): TypedEventFilter<[string, BigNumber], { from: string; amount: BigNumber }>;

    PaymentReceived(
      from?: null,
      amount?: null,
    ): TypedEventFilter<[string, BigNumber], { from: string; amount: BigNumber }>;

    "PaymentReleased(address,uint256)"(
      to?: null,
      amount?: null,
    ): TypedEventFilter<[string, BigNumber], { to: string; amount: BigNumber }>;

    PaymentReleased(to?: null, amount?: null): TypedEventFilter<[string, BigNumber], { to: string; amount: BigNumber }>;

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
      payees: string[],
      shares_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    payee(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    release(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    sell(amountOfToken: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buy(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    initialize(
      _acceptedToken: string,
      _priceOracle: string,
      payees: string[],
      shares_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payee(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    release(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    released(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sell(
      amountOfToken: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    shares(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalReleased(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
