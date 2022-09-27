import { expect } from "chai";

import { DEFAULT_ADMIN_ROLE, MINTER_ROLE, PAUSER_ROLE } from "../../constants";
import { shouldERC721Burnable } from "../shared/basic/burn";
import { shouldERC721Capped } from "../shared/basic/capped";
import { shouldERC721Pause } from "../shared/basic/pausable";
import { shouldERC721Accessible } from "../shared/accessible";
import { shouldERC721Base } from "../shared/basic/base";
import { deployErc721Base } from "../shared/fixtures";

describe("ERC721ABCP", function () {
  const name = "ERC721ABCP";

  shouldERC721Base(name);
  shouldERC721Accessible(name)(DEFAULT_ADMIN_ROLE, MINTER_ROLE, PAUSER_ROLE);
  shouldERC721Burnable(name);
  shouldERC721Capped(name);
  shouldERC721Pause(name);

  describe("supportsInterface", function () {
    it("should support all interfaces", async function () {
      const { contractInstance } = await deployErc721Base(name);

      const supportsIERC721 = await contractInstance.supportsInterface("0x80ac58cd");
      expect(supportsIERC721).to.equal(true);
      const supportsIERC721Metadata = await contractInstance.supportsInterface("0x5b5e139f");
      expect(supportsIERC721Metadata).to.equal(true);
      const supportsIERC165 = await contractInstance.supportsInterface("0x01ffc9a7");
      expect(supportsIERC165).to.equal(true);
      const supportsIAccessControl = await contractInstance.supportsInterface("0x7965db0b");
      expect(supportsIAccessControl).to.equal(true);
      const supportsInvalidInterface = await contractInstance.supportsInterface("0xffffffff");
      expect(supportsInvalidInterface).to.equal(false);
    });
  });
});
