import { expect } from "chai";
import { ethers } from "hardhat";

import { amount, tokenId } from "@ethberry/contracts-constants";

import type { IERC1155Options } from "../shared/defaultMint";
import { defaultMintBatchERC1155 } from "../shared/defaultMint";

export function shouldMintBatch(factory: () => Promise<any>, options: IERC1155Options = {}) {
  const { mintBatch = defaultMintBatchERC1155 } = options;

  describe("mintBatch", function () {
    it("should fail: double mint", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mintBatch(contractInstance, owner, receiver, [tokenId, 0n], [amount, amount], "0x");

      const tx1 = mintBatch(contractInstance, owner, receiver, [tokenId, 0n], [amount, amount], "0x");
      await expect(tx1)
        .to.be.revertedWithCustomError(contractInstance, "ERC1155ExceededCap")
        .withArgs(amount * 2n, amount, tokenId);
    });
  });
}
