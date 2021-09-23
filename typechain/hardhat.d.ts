/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import { FactoryOptions, HardhatEthersHelpers as HardhatEthersHelpersBase } from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IAccessControlUpgradeable__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "PaymentSplitterUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.PaymentSplitterUpgradeable__factory>;
    getContractFactory(
      name: "MinimalForwarderUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MinimalForwarderUpgradeable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "ERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC20Upgradeable__factory>;
    getContractFactory(
      name: "ERC20BurnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC20BurnableUpgradeable__factory>;
    getContractFactory(
      name: "ERC20SnapshotUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC20SnapshotUpgradeable__factory>;
    getContractFactory(
      name: "IERC20MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "TokenTimelockUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.TokenTimelockUpgradeable__factory>;
    getContractFactory(
      name: "ERC721Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721Upgradeable__factory>;
    getContractFactory(
      name: "ERC721BurnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721BurnableUpgradeable__factory>;
    getContractFactory(
      name: "ERC721EnumerableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721EnumerableUpgradeable__factory>;
    getContractFactory(
      name: "ERC721URIStorageUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721URIStorageUpgradeable__factory>;
    getContractFactory(
      name: "IERC721EnumerableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721EnumerableUpgradeable__factory>;
    getContractFactory(
      name: "IERC721MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC721ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC721Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721Upgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(name: "Dex", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.Dex__factory>;
    getContractFactory(
      name: "MindCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MindCoin__factory>;
    getContractFactory(
      name: "MindNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MindNFT__factory>;
    getContractFactory(
      name: "Marketplace",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Marketplace__factory>;
    getContractFactory(
      name: "MarketplaceStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MarketplaceStorage__factory>;
    getContractFactory(
      name: "IPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IPriceOracle__factory>;
    getContractFactory(
      name: "PriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.PriceOracle__factory>;
    getContractFactory(
      name: "StakingRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.StakingRewards__factory>;
    getContractFactory(
      name: "MindTokenTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MindTokenTimelock__factory>;

    // default types
    getContractFactory(name: string, signerOrOptions?: ethers.Signer | FactoryOptions): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer,
    ): Promise<ethers.ContractFactory>;
  }
}
