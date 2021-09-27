import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { MindCoin, MindCoin2 } from "../../typechain";
import { amount, DEFAULT_ADMIN_ROLE, initialTokenAmountInWei, MINTER_ROLE, PAUSER_ROLE } from "../constants";

describe("MindToken (upgrade)", function () {
  let tokenInstance: MindCoin2;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const tmpToken = await ethers.getContractFactory("MindCoin");
    const tmpInstance = (await upgrades.deployProxy(tmpToken, ["memoryOS COIN token", "MIND"])) as MindCoin;
    await tmpInstance.mint(owner.address, initialTokenAmountInWei);
    await tmpInstance.transfer(addr1.address, amount);
    const token = await ethers.getContractFactory("MindCoin2");
    tokenInstance = (await upgrades.upgradeProxy(tmpInstance.address, token)) as MindCoin2;
  });

  describe("Upgrade", function () {
    it("Should preserve roles", async function () {
      expect(await tokenInstance.hasRole(DEFAULT_ADMIN_ROLE, owner.address)).to.equal(true);
      expect(await tokenInstance.hasRole(MINTER_ROLE, owner.address)).to.equal(true);
      expect(await tokenInstance.hasRole(PAUSER_ROLE, owner.address)).to.equal(true);
    });

    it("Should preserve token balance", async function () {
      const totalSupply = await tokenInstance.totalSupply();
      expect(totalSupply).to.equal(initialTokenAmountInWei);
      const ownerBalance = await tokenInstance.balanceOf(owner.address);
      expect(ownerBalance).to.equal(totalSupply.sub(amount));
    });
  });
});
