import { expect } from "chai";
import { ethers } from "hardhat";
import { ZeroAddress } from "ethers";

import { tokenId } from "@ethberry/contracts-constants";

import type { IERC721Options } from "../shared/defaultMint";
import { defaultMintERC721 } from "../shared/defaultMint";

export function shouldBehaveLikeERC721Burnable(factory: () => Promise<any>, options: IERC721Options = {}) {
  const { mint = defaultMintERC721, batchSize = 0n } = options;

  describe("burn", function () {
    it("should burn own token", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner, batchSize + tokenId);

      const tx = await contractInstance.burn(batchSize + tokenId);
      await expect(tx)
        .to.emit(contractInstance, "Transfer")
        .withArgs(owner, ZeroAddress, batchSize + tokenId);

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(batchSize);

      const tx2 = contractInstance.ownerOf(batchSize + tokenId);
      await expect(tx2)
        .to.be.revertedWithCustomError(contractInstance, "ERC721NonexistentToken")
        .withArgs(batchSize + tokenId);
    });

    it("should burn approved token", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner, batchSize + tokenId);
      await contractInstance.approve(receiver, batchSize + tokenId);

      const tx = await contractInstance.burn(batchSize + tokenId);
      await expect(tx)
        .to.emit(contractInstance, "Transfer")
        .withArgs(owner, ZeroAddress, batchSize + tokenId);

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(batchSize);

      const tx2 = contractInstance.ownerOf(batchSize + tokenId);
      await expect(tx2)
        .to.be.revertedWithCustomError(contractInstance, "ERC721NonexistentToken")
        .withArgs(batchSize + tokenId);
    });

    it("should fail: ERC721InsufficientApproval", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner, batchSize + tokenId);

      const tx = contractInstance.connect(receiver).burn(batchSize + tokenId);
      await expect(tx)
        .to.be.revertedWithCustomError(contractInstance, "ERC721InsufficientApproval")
        .withArgs(receiver, batchSize + tokenId);
    });
  });
}
