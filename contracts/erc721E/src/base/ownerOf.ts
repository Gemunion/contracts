import { expect } from "chai";
import { ethers } from "hardhat";

import type { IERC721EnumOptions } from "../shared/defaultMint";
import { defaultMintERC721 } from "../shared/defaultMint";

export function shouldGetOwnerOf(factory: () => Promise<any>, options: IERC721EnumOptions = {}) {
  const { mint = defaultMintERC721, tokenId: defaultTokenId = 0n } = options;

  describe("ownerOf", function () {
    it("should get owner of token", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);
      const ownerOfToken = await contractInstance.ownerOf(defaultTokenId);
      expect(ownerOfToken).to.equal(owner);
    });

    it("should get owner of burned token", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);
      const tx = contractInstance.burn(defaultTokenId);
      await expect(tx).to.not.be.reverted;

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(0);

      const tx2 = contractInstance.ownerOf(defaultTokenId);
      await expect(tx2)
        .to.be.revertedWithCustomError(contractInstance, "ERC721NonexistentToken")
        .withArgs(defaultTokenId);
    });
  });
}
