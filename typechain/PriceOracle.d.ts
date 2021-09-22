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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PriceOracleInterface extends ethers.utils.Interface {
  functions: {
    "initialize()": FunctionFragment;
    "owner()": FunctionFragment;
    "priceInWei()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updatePrice(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "priceInWei", values?: undefined): string;
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
  encodeFunctionData(functionFragment: "updatePrice", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceInWei", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updatePrice", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PriceChanged(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceChanged"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<[string, string] & { previousOwner: string; newOwner: string }>;

export type PriceChangedEvent = TypedEvent<[BigNumber] & { newPrice: BigNumber }>;

export class PriceOracle extends BaseContract {
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

  interface: PriceOracleInterface;

  functions: {
    initialize(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    priceInWei(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updatePrice(
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  initialize(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  priceInWei(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updatePrice(
    _newPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    initialize(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    priceInWei(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    updatePrice(_newPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

    "PriceChanged(uint256)"(newPrice?: null): TypedEventFilter<[BigNumber], { newPrice: BigNumber }>;

    PriceChanged(newPrice?: null): TypedEventFilter<[BigNumber], { newPrice: BigNumber }>;
  };

  estimateGas: {
    initialize(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    priceInWei(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updatePrice(
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceInWei(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updatePrice(
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}