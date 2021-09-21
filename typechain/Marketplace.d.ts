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

interface MarketplaceInterface extends ethers.utils.Interface {
  functions: {
    "ERC721_Interface()": FunctionFragment;
    "acceptedToken()": FunctionFragment;
    "cancelOrder(address,uint256)": FunctionFragment;
    "createOrder(address,uint256,uint256,uint256)": FunctionFragment;
    "execute(tuple,bytes)": FunctionFragment;
    "executeOrder(address,uint256,uint256)": FunctionFragment;
    "getNonce(address)": FunctionFragment;
    "initialize(address,uint256,address)": FunctionFragment;
    "orderByAssetId(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerCutPerMillion()": FunctionFragment;
    "paused()": FunctionFragment;
    "publicationFeeInWei()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setOwnerCutPerMillion(uint256)": FunctionFragment;
    "setPublicationFee(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verify(tuple,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ERC721_Interface", values?: undefined): string;
  encodeFunctionData(functionFragment: "acceptedToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "cancelOrder", values: [string, BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [string, BigNumberish, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      },
      BytesLike,
    ],
  ): string;
  encodeFunctionData(functionFragment: "executeOrder", values: [string, BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: "getNonce", values: [string]): string;
  encodeFunctionData(functionFragment: "initialize", values: [string, BigNumberish, string]): string;
  encodeFunctionData(functionFragment: "orderByAssetId", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "ownerCutPerMillion", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "publicationFeeInWei", values?: undefined): string;
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
  encodeFunctionData(functionFragment: "setOwnerCutPerMillion", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "setPublicationFee", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      },
      BytesLike,
    ],
  ): string;

  decodeFunctionResult(functionFragment: "ERC721_Interface", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "acceptedToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orderByAssetId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerCutPerMillion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "publicationFeeInWei", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwnerCutPerMillion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPublicationFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {
    "ChangedOwnerCutPerMillion(uint256)": EventFragment;
    "ChangedPublicationFee(uint256)": EventFragment;
    "OrderCancelled(bytes32,uint256,address,address)": EventFragment;
    "OrderCreated(bytes32,uint256,address,address,uint256,uint256)": EventFragment;
    "OrderSuccessful(bytes32,uint256,address,address,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedOwnerCutPerMillion"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedPublicationFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderSuccessful"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type ChangedOwnerCutPerMillionEvent = TypedEvent<[BigNumber] & { ownerCutPerMillion: BigNumber }>;

export type ChangedPublicationFeeEvent = TypedEvent<[BigNumber] & { publicationFee: BigNumber }>;

export type OrderCancelledEvent = TypedEvent<
  [string, BigNumber, string, string] & {
    id: string;
    assetId: BigNumber;
    seller: string;
    nftAddress: string;
  }
>;

export type OrderCreatedEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber, BigNumber] & {
    id: string;
    assetId: BigNumber;
    seller: string;
    nftAddress: string;
    priceInWei: BigNumber;
    expiresAt: BigNumber;
  }
>;

export type OrderSuccessfulEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber, string] & {
    id: string;
    assetId: BigNumber;
    seller: string;
    nftAddress: string;
    totalPrice: BigNumber;
    buyer: string;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<[string, string] & { previousOwner: string; newOwner: string }>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class Marketplace extends BaseContract {
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

  interface: MarketplaceInterface;

  functions: {
    ERC721_Interface(overrides?: CallOverrides): Promise<[string]>;

    acceptedToken(overrides?: CallOverrides): Promise<[string]>;

    cancelOrder(
      nftAddress: string,
      assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    createOrder(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    execute(
      req: {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    executeOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getNonce(from: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _acceptedToken: string,
      _ownerCutPerMillion: BigNumberish,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    orderByAssetId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        id: string;
        seller: string;
        nftAddress: string;
        price: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<[BigNumber]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    publicationFeeInWei(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setOwnerCutPerMillion(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setPublicationFee(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    verify(
      req: {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
  };

  ERC721_Interface(overrides?: CallOverrides): Promise<string>;

  acceptedToken(overrides?: CallOverrides): Promise<string>;

  cancelOrder(
    nftAddress: string,
    assetId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  createOrder(
    nftAddress: string,
    assetId: BigNumberish,
    priceInWei: BigNumberish,
    expiresAt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  execute(
    req: {
      from: string;
      to: string;
      value: BigNumberish;
      gas: BigNumberish;
      nonce: BigNumberish;
      data: BytesLike;
    },
    signature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  executeOrder(
    nftAddress: string,
    assetId: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _acceptedToken: string,
    _ownerCutPerMillion: BigNumberish,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  orderByAssetId(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [string, string, string, BigNumber, BigNumber] & {
      id: string;
      seller: string;
      nftAddress: string;
      price: BigNumber;
      expiresAt: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  publicationFeeInWei(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setOwnerCutPerMillion(
    _ownerCutPerMillion: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setPublicationFee(
    _publicationFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  verify(
    req: {
      from: string;
      to: string;
      value: BigNumberish;
      gas: BigNumberish;
      nonce: BigNumberish;
      data: BytesLike;
    },
    signature: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  callStatic: {
    ERC721_Interface(overrides?: CallOverrides): Promise<string>;

    acceptedToken(overrides?: CallOverrides): Promise<string>;

    cancelOrder(nftAddress: string, assetId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    createOrder(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    execute(
      req: {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean, string]>;

    executeOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _acceptedToken: string,
      _ownerCutPerMillion: BigNumberish,
      _owner: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    orderByAssetId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        id: string;
        seller: string;
        nftAddress: string;
        price: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    publicationFeeInWei(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setOwnerCutPerMillion(_ownerCutPerMillion: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setPublicationFee(_publicationFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    verify(
      req: {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {
    "ChangedOwnerCutPerMillion(uint256)"(
      ownerCutPerMillion?: null,
    ): TypedEventFilter<[BigNumber], { ownerCutPerMillion: BigNumber }>;

    ChangedOwnerCutPerMillion(
      ownerCutPerMillion?: null,
    ): TypedEventFilter<[BigNumber], { ownerCutPerMillion: BigNumber }>;

    "ChangedPublicationFee(uint256)"(
      publicationFee?: null,
    ): TypedEventFilter<[BigNumber], { publicationFee: BigNumber }>;

    ChangedPublicationFee(publicationFee?: null): TypedEventFilter<[BigNumber], { publicationFee: BigNumber }>;

    "OrderCancelled(bytes32,uint256,address,address)"(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
    ): TypedEventFilter<
      [string, BigNumber, string, string],
      { id: string; assetId: BigNumber; seller: string; nftAddress: string }
    >;

    OrderCancelled(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
    ): TypedEventFilter<
      [string, BigNumber, string, string],
      { id: string; assetId: BigNumber; seller: string; nftAddress: string }
    >;

    "OrderCreated(bytes32,uint256,address,address,uint256,uint256)"(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      priceInWei?: null,
      expiresAt?: null,
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber, BigNumber],
      {
        id: string;
        assetId: BigNumber;
        seller: string;
        nftAddress: string;
        priceInWei: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    OrderCreated(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      priceInWei?: null,
      expiresAt?: null,
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber, BigNumber],
      {
        id: string;
        assetId: BigNumber;
        seller: string;
        nftAddress: string;
        priceInWei: BigNumber;
        expiresAt: BigNumber;
      }
    >;

    "OrderSuccessful(bytes32,uint256,address,address,uint256,address)"(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      totalPrice?: null,
      buyer?: string | null,
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber, string],
      {
        id: string;
        assetId: BigNumber;
        seller: string;
        nftAddress: string;
        totalPrice: BigNumber;
        buyer: string;
      }
    >;

    OrderSuccessful(
      id?: null,
      assetId?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      totalPrice?: null,
      buyer?: string | null,
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber, string],
      {
        id: string;
        assetId: BigNumber;
        seller: string;
        nftAddress: string;
        totalPrice: BigNumber;
        buyer: string;
      }
    >;

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

    "Unpaused(address)"(account?: null): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    ERC721_Interface(overrides?: CallOverrides): Promise<BigNumber>;

    acceptedToken(overrides?: CallOverrides): Promise<BigNumber>;

    cancelOrder(
      nftAddress: string,
      assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    createOrder(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    execute(
      req: {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    executeOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _acceptedToken: string,
      _ownerCutPerMillion: BigNumberish,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    orderByAssetId(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    publicationFeeInWei(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setOwnerCutPerMillion(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setPublicationFee(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    verify(
      req: {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ERC721_Interface(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelOrder(
      nftAddress: string,
      assetId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    createOrder(
      nftAddress: string,
      assetId: BigNumberish,
      priceInWei: BigNumberish,
      expiresAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    execute(
      req: {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    executeOrder(
      nftAddress: string,
      assetId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getNonce(from: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _acceptedToken: string,
      _ownerCutPerMillion: BigNumberish,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    orderByAssetId(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    publicationFeeInWei(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setOwnerCutPerMillion(
      _ownerCutPerMillion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setPublicationFee(
      _publicationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    verify(
      req: {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
