import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractFactory } from "ethers";
import { Network } from "@ethersproject/networks";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import tokens from "./tokens.json";

import { ERC721DropboxMock } from "../../typechain-types";
import { MINTER_ROLE, tokenName, tokenSymbol, baseTokenURI } from "../constants";

describe("ERC721Dropbox", function () {
  let erc721: ContractFactory;
  let erc721Instance: ERC721DropboxMock;
  let owner: SignerWithAddress;
  let receiver: SignerWithAddress;
  let addr2: SignerWithAddress;
  let network: Network;

  beforeEach(async function () {
    erc721 = await ethers.getContractFactory("ERC721DropboxMock");
    [owner, receiver, addr2] = await ethers.getSigners();

    erc721Instance = (await erc721.deploy(tokenName, tokenSymbol, baseTokenURI)) as ERC721DropboxMock;

    await erc721Instance.grantRole(MINTER_ROLE, receiver.address);

    network = await ethers.provider.getNetwork();
  });

  describe("Mint all elements", function () {
    it("element", async function () {
      for (const [tokenId, account] of Object.entries(tokens)) {
        const signature = await receiver._signTypedData(
          // Domain
          {
            name: tokenName,
            version: "1.0.0",
            chainId: network.chainId,
            verifyingContract: erc721Instance.address,
          },
          // Types
          {
            NFT: [
              { name: "account", type: "address" },
              { name: "tokenId", type: "uint256" },
            ],
          },
          // Value
          { account, tokenId },
        );

        const tx = erc721Instance.connect(addr2).redeem(account, tokenId, receiver.address, signature);
        await expect(tx).to.emit(erc721Instance, "Transfer").withArgs(ethers.constants.AddressZero, account, tokenId);
      }
    });
  });

  describe("Duplicate mint", function () {
    it("element", async function () {
      const tokenId = Object.keys(tokens)[0];
      const account = Object.values(tokens)[0];
      const signature = await receiver._signTypedData(
        // Domain
        {
          name: tokenName,
          version: "1.0.0",
          chainId: network.chainId,
          verifyingContract: erc721Instance.address,
        },
        // Types
        {
          NFT: [
            { name: "account", type: "address" },
            { name: "tokenId", type: "uint256" },
          ],
        },
        // Value
        { account, tokenId },
      );

      const tx1 = erc721Instance.redeem(account, tokenId, receiver.address, signature);
      await expect(tx1).to.emit(erc721Instance, "Transfer").withArgs(ethers.constants.AddressZero, account, tokenId);

      const tx2 = erc721Instance.redeem(account, tokenId, receiver.address, signature);
      await expect(tx2).to.be.revertedWith("ERC721: token already minted");
    });
  });

  describe("Frontrun", function () {
    it("element", async function () {
      const tokenId = Object.keys(tokens)[0];
      const account = Object.values(tokens)[0];
      const signature = await receiver._signTypedData(
        // Domain
        {
          name: tokenName,
          version: "1.0.0",
          chainId: network.chainId,
          verifyingContract: erc721Instance.address,
        },
        // Types
        {
          NFT: [
            { name: "account", type: "address" },
            { name: "tokenId", type: "uint256" },
          ],
        },
        // Value
        { account, tokenId },
      );

      const tx = erc721Instance.redeem(owner.address, tokenId, receiver.address, signature);
      await expect(tx).to.be.revertedWith("ERC721Dropbox: Invalid signature");
    });
  });
});
