import { expect } from "chai";
import { ethers } from "hardhat";

import { amount } from "@ethberry/contracts-constants";
import { deployRejector } from "@ethberry/contracts-finance";

import type { IERC20Options } from "../shared/defaultMint";
import { defaultMintERC20 } from "../shared/defaultMint";

export function shouldTransfer(factory: () => Promise<any>, options: IERC20Options = {}) {
  const { mint = defaultMintERC20 } = options;

  describe("transfer", function () {
    it("should transfer to EOA", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);

      const tx = contractInstance.transfer(receiver, amount);
      await expect(tx).to.emit(contractInstance, "Transfer").withArgs(owner, receiver, amount);

      const receiverBalance = await contractInstance.balanceOf(receiver);
      expect(receiverBalance).to.equal(amount);

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(0);
    });

    it("should transfer to contract", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();
      const erc20NonReceiverInstance = await deployRejector();

      await mint(contractInstance, owner, owner);

      const tx = contractInstance.transfer(erc20NonReceiverInstance, amount);
      await expect(tx).to.emit(contractInstance, "Transfer").withArgs(owner, erc20NonReceiverInstance, amount);

      const nonReceiverBalance = await contractInstance.balanceOf(erc20NonReceiverInstance);
      expect(nonReceiverBalance).to.equal(amount);

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(0);
    });

    it("should fail: ERC20InsufficientBalance", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner, 0n);

      const tx = contractInstance.transfer(receiver, amount);
      await expect(tx)
        .to.be.revertedWithCustomError(contractInstance, "ERC20InsufficientBalance")
        .withArgs(owner, 0, amount);
    });
  });
}
