import { expect } from "chai";
import { ethers } from "hardhat";

import type { IERC721EnumOptions } from "../shared/defaultMint";
import { defaultMintERC721 } from "../shared/defaultMint";
import { tokenMaxAmount } from "@ethberry/contracts-constants";

export function shouldBehaveLikeERC721Capped(factory: () => Promise<any>, options: IERC721EnumOptions = {}) {
  const { mint = defaultMintERC721 } = options;

  describe("cap", function () {
    it("should fail: ERC721ExceededCap", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);
      await mint(contractInstance, owner, owner);

      const cap = await contractInstance.cap();
      expect(cap).to.equal(2);

      const totalSupply = await contractInstance.totalSupply();
      expect(totalSupply).to.equal(2);

      const tx = mint(contractInstance, owner, owner);
      await expect(tx).to.be.revertedWithCustomError(contractInstance, "ERC721ExceededCap").withArgs(3, tokenMaxAmount);
    });
  });
}
