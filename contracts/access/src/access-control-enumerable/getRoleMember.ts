import { expect } from "chai";
import { ethers } from "hardhat";

import { DEFAULT_ADMIN_ROLE } from "@ethberry/contracts-constants";

import type { IAccessControlOptions } from "../shared/interfaces";

export function shouldGetRoleMember(factory: () => Promise<any>, options: IAccessControlOptions = {}) {
  const { adminRole = DEFAULT_ADMIN_ROLE } = options;

  describe("getRoleMember", function () {
    it("should grant role", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      const count = await contractInstance.getRoleMemberCount(adminRole);
      expect(count).to.equal(1);

      const member = await contractInstance.getRoleMember(adminRole, 0);
      expect(member).to.equal(owner);
    });

    it("should fail: PANIC", async function () {
      const contractInstance = await factory();

      const count = await contractInstance.getRoleMemberCount(adminRole);
      expect(count).to.equal(1);

      const tx = contractInstance.getRoleMember(adminRole, 1);
      await expect(tx).to.be.revertedWithPanic(0x32);
    });
  });
}
