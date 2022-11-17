import { use } from "chai";
import { solidity } from "ethereum-waffle";

import { DEFAULT_ADMIN_ROLE, InterfaceId, MINTER_ROLE } from "@gemunion/contracts-constants";
import { shouldBeAccessible, shouldSupportsInterface } from "@gemunion/contracts-mocha";

import { shouldERC20Base } from "../../src/base";
import { shouldERC20Permit } from "../../src/permit";
import { shouldERC20Burnable } from "../../src/burnable";
import { deployErc20Base } from "../../src/fixtures";

use(solidity);

describe("ERC20ABT", function () {
  const factory = () => deployErc20Base(this.title);

  shouldBeAccessible(factory)(DEFAULT_ADMIN_ROLE, MINTER_ROLE);

  shouldERC20Base(factory);
  shouldERC20Burnable(factory);
  shouldERC20Permit(factory);

  shouldSupportsInterface(factory)(
    InterfaceId.IERC165,
    InterfaceId.IAccessControl,
    InterfaceId.IERC20,
    InterfaceId.IERC20Metadata,
  );
});
