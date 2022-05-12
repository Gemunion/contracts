import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractFactory } from "ethers";
import { time } from "@openzeppelin/test-helpers";

import { VestingFactoryTest, ERC20ACB } from "../../typechain-types";
import { amount, DEFAULT_ADMIN_ROLE, PAUSER_ROLE, tokenName, tokenSymbol } from "../constants";

import { shouldHaveRole } from "../shared/accessControl/hasRoles";
import { shouldGetRoleAdmin } from "../shared/accessControl/getRoleAdmin";
import { shouldGrantRole } from "../shared/accessControl/grantRole";
import { shouldRevokeRole } from "../shared/accessControl/revokeRole";
import { shouldRenounceRole } from "../shared/accessControl/renounceRole";

describe("VestingFactory", function () {
  let factory: ContractFactory;
  let factoryInstance: VestingFactoryTest;
  let erc20: ContractFactory;
  let erc20Instance: ERC20ACB;

  beforeEach(async function () {
    factory = await ethers.getContractFactory("VestingFactoryTest");
    erc20 = await ethers.getContractFactory("ERC20ACB");
    [this.owner, this.receiver, this.stranger] = await ethers.getSigners();

    factoryInstance = (await factory.deploy()) as VestingFactoryTest;
    erc20Instance = (await erc20.deploy(tokenName, tokenSymbol)) as ERC20ACB;

    await erc20Instance.mint(this.owner.address, amount);
    await erc20Instance.approve(factoryInstance.address, amount);

    this.contractInstance = factoryInstance;
  });

  shouldHaveRole(DEFAULT_ADMIN_ROLE);
  shouldGetRoleAdmin(DEFAULT_ADMIN_ROLE, PAUSER_ROLE);
  shouldGrantRole();
  shouldRevokeRole();
  shouldRenounceRole();

  describe("deployVesting", function () {
    it("should create vesting (FLAT + ETH)", async function () {
      const span = 300;
      const timestamp: number = (await time.latest()).toNumber();

      const tx = await factoryInstance.deployVesting(
        "FLAT",
        ethers.constants.AddressZero,
        0,
        this.receiver.address,
        timestamp,
        span,
        { value: amount },
      );

      const [vesting] = await factoryInstance.allVesting();

      await expect(tx)
        .to.emit(factoryInstance, "VestingDeployed")
        .withArgs(vesting, "FLAT", ethers.constants.AddressZero, amount, this.receiver.address, timestamp, span);
    });

    it("should create vesting (FLAT + ERC20)", async function () {
      const span = 300;
      const timestamp: number = (await time.latest()).toNumber();

      const tx = await factoryInstance.deployVesting(
        "FLAT",
        erc20Instance.address,
        amount,
        this.receiver.address,
        timestamp,
        span,
      );

      const [vesting] = await factoryInstance.allVesting();

      await expect(tx)
        .to.emit(factoryInstance, "VestingDeployed")
        .withArgs(vesting, "FLAT", erc20Instance.address, amount, this.receiver.address, timestamp, span);
    });

    it("should fail: amount must be greater than 0 (FLAT + ETH)", async function () {
      const span = 300;
      const timestamp: number = (await time.latest()).toNumber();

      const tx = factoryInstance.deployVesting(
        "FLAT",
        ethers.constants.AddressZero,
        0,
        this.receiver.address,
        timestamp,
        span,
        { value: 0 },
      );

      await expect(tx).to.be.revertedWith("ContractManager: vesting amount must be greater than zero");
    });

    it("should fail: amount must be greater than 0 (FLAT + ERC20)", async function () {
      const span = 300;
      const timestamp: number = (await time.latest()).toNumber();

      const tx = factoryInstance.deployVesting(
        "FLAT",
        erc20Instance.address,
        0,
        this.receiver.address,
        timestamp,
        span,
      );

      await expect(tx).to.be.revertedWith("ContractManager: vesting amount must be greater than zero");
    });

    it("should fail: unknown template", async function () {
      const span = 300;
      const timestamp: number = (await time.latest()).toNumber();

      const tx = factoryInstance.deployVesting(
        "UNKNOWN",
        erc20Instance.address,
        amount,
        this.receiver.address,
        timestamp,
        span,
      );

      await expect(tx).to.be.revertedWith("ContractManager: unknown template");
    });
  });
});