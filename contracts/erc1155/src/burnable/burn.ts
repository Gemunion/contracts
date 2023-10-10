import { expect } from "chai";
import { ethers } from "hardhat";
import { ZeroAddress } from "ethers";

import { amount, tokenId } from "@gemunion/contracts-constants";

import type { IERC1155Options } from "../shared/defaultMint";
import { defaultMintERC1155 } from "../shared/defaultMint";

export function shouldBurn(factory: () => Promise<any>, options: IERC1155Options = {}) {
  const { mint = defaultMintERC1155 } = options;

  describe("burn", function () {
    it("should burn own token", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner.address, tokenId, amount, "0x");
      const tx = contractInstance.burn(owner.address, tokenId, amount);

      await expect(tx)
        .to.emit(contractInstance, "TransferSingle")
        .withArgs(owner.address, owner.address, ZeroAddress, tokenId, amount);

      const balanceOfOwner = await contractInstance.balanceOf(owner.address, tokenId);
      expect(balanceOfOwner).to.equal(0);
    });

    it("should burn approved token", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner.address, tokenId, amount, "0x");
      await contractInstance.setApprovalForAll(receiver.address, true);

      const tx = contractInstance.connect(receiver).burn(owner.address, tokenId, amount);
      await expect(tx)
        .to.emit(contractInstance, "TransferSingle")
        .withArgs(receiver.address, owner.address, ZeroAddress, tokenId, amount);

      const balanceOfOwner = await contractInstance.balanceOf(owner.address, tokenId);
      expect(balanceOfOwner).to.equal(0);
    });

    it("should fail: ERC1155MissingApprovalForAll", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner.address, tokenId, amount, "0x");
      const tx = contractInstance.connect(receiver).burn(owner.address, tokenId, amount);

      await expect(tx)
        .to.be.revertedWithCustomError(contractInstance, "ERC1155MissingApprovalForAll")
        .withArgs(receiver.address, owner.address);
    });

    it("should fail: ERC1155InsufficientBalance", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, receiver.address, tokenId, amount, "0x");

      const tx = contractInstance.burn(owner.address, tokenId, amount);
      await expect(tx)
        .to.be.revertedWithCustomError(contractInstance, "ERC1155InsufficientBalance")
        .withArgs(owner.address, 0, amount, tokenId);
    });
  });
}
