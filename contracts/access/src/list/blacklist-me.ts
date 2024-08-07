import { expect } from "chai";
import { ethers } from "hardhat";

export function shouldBehaveLikeBlackListMe(factory: () => Promise<any>) {
  describe("Black list me", function () {
    it("should fail: blacklisted", async function () {
      const [_owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await contractInstance.blacklist(receiver);
      const tx = contractInstance.connect(receiver).testMe();
      await expect(tx).to.be.revertedWithCustomError(contractInstance, "BlackListError").withArgs(receiver);
    });

    it("should pass", async function () {
      const [_owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      const result = await contractInstance.connect(receiver).testMe();
      expect(result).to.equal(true);
    });
  });
}
