import { ethers } from "hardhat";
import { Contract } from "ethers";

import {
  baseTokenURI,
  batchSize,
  royalty,
  tokenMaxAmount,
  tokenName,
  tokenSymbol,
} from "@gemunion/contracts-constants";

export async function deployERC721<T extends Contract>(name: string): Promise<T> {
  const erc721Factory = await ethers.getContractFactory(name);

  if (name === "ERC721BaseUrlTest") {
    return erc721Factory.deploy(tokenName, tokenSymbol, royalty, baseTokenURI) as Promise<T>;
  } else if (name === "ERC721DropboxTest") {
    return erc721Factory.deploy(tokenName, tokenSymbol, tokenMaxAmount, royalty) as Promise<T>;
  } else {
    const args: Array<string | number> = [tokenName, tokenSymbol];
    const parts = name.substr(6);

    if (parts.includes("C")) {
      if (parts.includes("K")) {
        args.push(batchSize + tokenMaxAmount);
      } else {
        args.push(tokenMaxAmount);
      }
    }

    if (parts.includes("R")) {
      args.push(royalty);
    }

    return erc721Factory.deploy(...args) as Promise<T>;
  }
}
