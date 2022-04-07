import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractFactory } from "ethers";
import { Network } from "@ethersproject/networks";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { EIP712ERC721Dropbox, ERC721ACB } from "../../typechain-types";
import { baseTokenURI, MINTER_ROLE, nonce, tokenId, tokenName, tokenSymbol } from "../constants";

describe("EIP712ERC721Dropbox", function () {
  let erc721: ContractFactory;
  let erc721Instance: ERC721ACB;
  let dropbox: ContractFactory;
  let dropboxInstance: EIP712ERC721Dropbox;
  let owner: SignerWithAddress;
  let receiver: SignerWithAddress;
  let stranger: SignerWithAddress;
  let network: Network;

  beforeEach(async function () {
    erc721 = await ethers.getContractFactory("ERC721ACB");
    dropbox = await ethers.getContractFactory("EIP712ERC721Dropbox");
    [owner, receiver, stranger] = await ethers.getSigners();

    erc721Instance = (await erc721.deploy(tokenName, tokenSymbol, baseTokenURI)) as ERC721ACB;
    dropboxInstance = (await dropbox.deploy(tokenName)) as EIP712ERC721Dropbox;

    await dropboxInstance.setFactory(erc721Instance.address);
    await erc721Instance.grantRole(MINTER_ROLE, dropboxInstance.address);

    network = await ethers.provider.getNetwork();
  });

  describe("redeem", function () {
    it("should redeem", async function () {
      const signature = await owner._signTypedData(
        // Domain
        {
          name: tokenName,
          version: "1.0.0",
          chainId: network.chainId,
          verifyingContract: dropboxInstance.address,
        },
        // Types
        {
          NFT: [
            { name: "nonce", type: "bytes32" },
            { name: "account", type: "address" },
            { name: "tokenId", type: "uint256" },
          ],
        },
        // Value
        {
          nonce,
          account: receiver.address,
          tokenId,
        },
      );

      const tx1 = dropboxInstance.connect(stranger).redeem(nonce, receiver.address, tokenId, owner.address, signature);
      await expect(tx1)
        .to.emit(erc721Instance, "Transfer")
        .withArgs(ethers.constants.AddressZero, receiver.address, tokenId);
    });

    it("should fail: duplicate mint", async function () {
      const signature = await owner._signTypedData(
        // Domain
        {
          name: tokenName,
          version: "1.0.0",
          chainId: network.chainId,
          verifyingContract: dropboxInstance.address,
        },
        // Types
        {
          NFT: [
            { name: "nonce", type: "bytes32" },
            { name: "account", type: "address" },
            { name: "tokenId", type: "uint256" },
          ],
        },
        // Value
        {
          nonce,
          account: receiver.address,
          tokenId,
        },
      );

      const tx1 = dropboxInstance.connect(stranger).redeem(nonce, receiver.address, tokenId, owner.address, signature);
      await expect(tx1)
        .to.emit(erc721Instance, "Transfer")
        .withArgs(ethers.constants.AddressZero, receiver.address, tokenId);

      const tx2 = dropboxInstance.connect(stranger).redeem(nonce, receiver.address, tokenId, owner.address, signature);
      await expect(tx2).to.be.revertedWith("EIP712ERC721Dropbox: Expired signature");
    });

    it("should fail: invalid signature", async function () {
      const signature = await owner._signTypedData(
        // Domain
        {
          name: tokenName,
          version: "1.0.0",
          chainId: network.chainId,
          verifyingContract: dropboxInstance.address,
        },
        // Types
        {
          NFT: [
            { name: "nonce", type: "bytes32" },
            { name: "account", type: "address" },
            { name: "tokenId", type: "uint256" },
          ],
        },
        // Value
        {
          nonce,
          account: receiver.address,
          tokenId,
        },
      );

      const tx1 = dropboxInstance
        .connect(stranger)
        .redeem(nonce, receiver.address, tokenId, stranger.address, signature);
      await expect(tx1).to.be.revertedWith("EIP712ERC721Dropbox: Invalid signature");
    });
  });
});
