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

interface MindTokenTimelockInterface extends ethers.utils.Interface {
  functions: {
    "beneficiary()": FunctionFragment;
    "initialize(address,address,uint256)": FunctionFragment;
    "release()": FunctionFragment;
    "releaseTime()": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "beneficiary", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "release", values?: undefined): string;
  encodeFunctionData(functionFragment: "releaseTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "beneficiary", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "releaseTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class MindTokenTimelock extends BaseContract {
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

  interface: MindTokenTimelockInterface;

  functions: {
    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      token_: string,
      beneficiary_: string,
      releaseTime_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    release(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    releaseTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  beneficiary(overrides?: CallOverrides): Promise<string>;

  initialize(
    token_: string,
    beneficiary_: string,
    releaseTime_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  release(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    beneficiary(overrides?: CallOverrides): Promise<string>;

    initialize(
      token_: string,
      beneficiary_: string,
      releaseTime_: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    release(overrides?: CallOverrides): Promise<void>;

    releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      token_: string,
      beneficiary_: string,
      releaseTime_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    release(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      token_: string,
      beneficiary_: string,
      releaseTime_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    release(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    releaseTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
