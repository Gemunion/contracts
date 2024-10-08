import { expect } from "chai";
import { ethers } from "hardhat";

import { deployContract } from "@ethberry/contracts-utils";
import { amount } from "@ethberry/contracts-constants";

describe("NativeReceiverMock", function () {
  const factory = () => deployContract(this.title);

  it("accept native token", async function () {
    const [owner] = await ethers.getSigners();
    const contractInstance = await factory();

    const tx = owner.sendTransaction({
      to: contractInstance,
      value: amount,
      // gasLimit: 21000 + 61, // + revert
    });

    await expect(tx).to.emit(contractInstance, "PaymentReceived").withArgs(owner, amount);
    await expect(tx).to.changeEtherBalances([owner, contractInstance], [-amount, amount]);
  });
});
