import { expect } from "chai";
import { ethers } from "hardhat";
import { ZeroAddress } from "ethers";

import { amount } from "@gemunion/contracts-constants";

import type { IERC20Options } from "../shared/defaultMint";
import { defaultMintERC20 } from "../shared/defaultMint";

export function shouldBurn(factory: () => Promise<any>, options: IERC20Options = {}) {
  const { mint = defaultMintERC20 } = options;

  describe("burn", function () {
    it("should burn tokens", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner.address);

      const tx = contractInstance.burn(amount);
      await expect(tx).to.emit(contractInstance, "Transfer").withArgs(owner.address, ZeroAddress, amount);

      const balance = await contractInstance.balanceOf(owner.address);
      expect(balance).to.equal(0);

      const totalSupply = await contractInstance.totalSupply();
      expect(totalSupply).to.equal(0);
    });

    it("should burn zero tokens", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner.address, 0n);

      const tx = contractInstance.burn(0);
      await expect(tx).to.emit(contractInstance, "Transfer").withArgs(owner.address, ZeroAddress, 0);
    });

    it("should fail: burn amount exceeds balance", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner.address, 0n);

      const tx = contractInstance.burn(amount);
      await expect(tx).to.be.revertedWith("ERC20: burn amount exceeds balance");
    });
  });
}
