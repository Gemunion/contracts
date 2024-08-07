import { expect } from "chai";
import { ethers } from "hardhat";
import { ZeroAddress } from "ethers";

import type { IERC721EnumOptions } from "../shared/defaultMint";
import { defaultMintERC721 } from "../shared/defaultMint";

export function shouldBehaveLikeERC721Burnable(factory: () => Promise<any>, options: IERC721EnumOptions = {}) {
  const { mint = defaultMintERC721, tokenId: defaultTokenId = 0n } = options;

  describe("burn", function () {
    it("should burn own token", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);

      const tx = await contractInstance.burn(defaultTokenId);
      await expect(tx).to.emit(contractInstance, "Transfer").withArgs(owner, ZeroAddress, defaultTokenId);

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(0);
    });

    it("should burn approved token", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);
      await contractInstance.approve(receiver, defaultTokenId);

      const tx = await contractInstance.burn(defaultTokenId);
      await expect(tx).to.emit(contractInstance, "Transfer").withArgs(owner, ZeroAddress, defaultTokenId);

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(0);
    });

    it("should fail: ERC721InsufficientApproval", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);

      const tx = contractInstance.connect(receiver).burn(defaultTokenId);
      await expect(tx)
        .to.be.revertedWithCustomError(contractInstance, "ERC721InsufficientApproval")
        .withArgs(receiver, defaultTokenId);
    });
  });
}
