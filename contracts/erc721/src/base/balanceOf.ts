import { expect } from "chai";
import { ethers } from "hardhat";
import { ZeroAddress } from "ethers";

import { tokenId } from "@ethberry/contracts-constants";

import type { IERC721Options } from "../shared/defaultMint";
import { defaultMintERC721 } from "../shared/defaultMint";

export function shouldGetBalanceOf(factory: () => Promise<any>, options: IERC721Options = {}) {
  const { mint = defaultMintERC721, batchSize = 0n } = options;

  describe("balanceOf", function () {
    it("should get balance of owner", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner, batchSize + tokenId);
      const balance = await contractInstance.balanceOf(owner);
      expect(balance).to.equal(batchSize + 1n);
    });

    it("should get balance of not owner", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner, batchSize + tokenId);
      const balance = await contractInstance.balanceOf(receiver);
      expect(balance).to.equal(0);
    });

    it("should fail: ERC721InvalidOwner", async function () {
      const contractInstance = await factory();

      const tx = contractInstance.balanceOf(ZeroAddress);
      await expect(tx).to.be.revertedWithCustomError(contractInstance, "ERC721InvalidOwner").withArgs(ZeroAddress);
    });
  });
}
