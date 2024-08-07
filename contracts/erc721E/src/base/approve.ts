import { expect } from "chai";
import { ethers } from "hardhat";
import { ZeroAddress } from "ethers";

import type { IERC721EnumOptions } from "../shared/defaultMint";
import { defaultMintERC721 } from "../shared/defaultMint";

export function shouldApprove(factory: () => Promise<any>, options: IERC721EnumOptions = {}) {
  const { mint = defaultMintERC721, tokenId: defaultTokenId = 0n } = options;

  describe("approve", function () {
    it("should approve", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);

      const tx = contractInstance.approve(receiver, defaultTokenId);
      await expect(tx).to.emit(contractInstance, "Approval").withArgs(owner, receiver, defaultTokenId);

      const approved = await contractInstance.getApproved(defaultTokenId);
      expect(approved).to.equal(receiver);

      const tx1 = contractInstance.connect(receiver).burn(defaultTokenId);
      await expect(tx1).to.emit(contractInstance, "Transfer").withArgs(owner, ZeroAddress, defaultTokenId);

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(0);
    });

    it("should approve to self", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);
      const tx = contractInstance.approve(owner, defaultTokenId);
      await expect(tx).to.not.be.reverted;
    });

    it("should fail: ERC721InvalidApprover", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);
      const tx = contractInstance.connect(receiver).approve(owner, defaultTokenId);
      await expect(tx).to.be.revertedWithCustomError(contractInstance, "ERC721InvalidApprover").withArgs(receiver);
    });
  });
}
