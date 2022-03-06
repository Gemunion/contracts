import { expect } from "chai";

import { DEFAULT_ADMIN_ROLE, MINTER_ROLE, PAUSER_ROLE } from "../../../constants";

export function shouldHaveRole(pauser = false) {
  describe("constructor A+M+P", function () {
    it("Should set the right roles to deployer", async function () {
      const isAdmin = await this.erc721Instance.hasRole(DEFAULT_ADMIN_ROLE, this.owner.address);
      expect(isAdmin).to.equal(true);
      const isMinter = await this.erc721Instance.hasRole(MINTER_ROLE, this.owner.address);
      expect(isMinter).to.equal(true);
      if (pauser) {
        const isPauser = await this.erc721Instance.hasRole(PAUSER_ROLE, this.owner.address);
        expect(isPauser).to.equal(true);
      }
    });
  });
}
