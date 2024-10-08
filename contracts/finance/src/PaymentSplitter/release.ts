import { expect } from "chai";
import { ethers } from "hardhat";

import { amount } from "@ethberry/contracts-constants";
import { deployERC1363Mock } from "@ethberry/contracts-mocks";

export function shouldRelease(factory: () => Promise<any>) {
  describe("release ETH ", function () {
    it("should release", async function () {
      const [owner] = await ethers.getSigners();

      const contractInstance = await factory();

      const tx1 = owner.sendTransaction({
        to: contractInstance,
        value: amount,
      });
      await expect(tx1).to.emit(contractInstance, "PaymentReceived").withArgs(owner, amount);

      const tx2 = contractInstance.release(owner);
      await expect(tx2)
        .to.emit(contractInstance, "PaymentReleased")
        .withArgs(owner, amount / 2n);
    });

    it("should fail: account is not due payment", async function () {
      const [owner] = await ethers.getSigners();

      const contractInstance = await factory();

      const tx1 = contractInstance.release(owner);
      await expect(tx1).to.rejectedWith("PaymentSplitter: account is not due payment");
    });

    it("should fail: account has no shares", async function () {
      const [_owner, _receiver, stranger] = await ethers.getSigners();

      const contractInstance = await factory();

      const tx2 = contractInstance.release(stranger);
      await expect(tx2).to.rejectedWith("PaymentSplitter: account has no shares");
    });
  });

  describe("release ERC20 ", function () {
    it("should release", async function () {
      const [owner] = await ethers.getSigners();

      const contractInstance = await factory();

      const erc20Instance = await deployERC1363Mock();
      const tx1 = await erc20Instance.mint(contractInstance, amount);
      await expect(tx1).to.not.be.reverted;

      const tx2 = contractInstance["release(address,address)"](erc20Instance, owner);
      await expect(tx2)
        .to.emit(contractInstance, "ERC20PaymentReleased")
        .withArgs(erc20Instance, owner, amount / 2n);
    });

    it("should fail: account is not due payment", async function () {
      const [owner] = await ethers.getSigners();

      const contractInstance = await factory();

      const erc20Instance = await deployERC1363Mock();

      const tx1 = contractInstance["release(address,address)"](erc20Instance, owner);
      await expect(tx1).to.rejectedWith("PaymentSplitter: account is not due payment");
    });

    it("should fail: account has no shares", async function () {
      const [_owner, _receiver, stranger] = await ethers.getSigners();

      const contractInstance = await factory();

      const erc20Instance = await deployERC1363Mock();
      const tx1 = await erc20Instance.mint(contractInstance, amount);
      await expect(tx1).to.not.be.reverted;

      const tx2 = contractInstance["release(address,address)"](contractInstance, stranger);
      await expect(tx2).to.rejectedWith("PaymentSplitter: account has no shares");
    });
  });
}
