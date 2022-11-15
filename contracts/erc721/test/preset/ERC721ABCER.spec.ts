import { use } from "chai";
import { solidity } from "ethereum-waffle";

import { DEFAULT_ADMIN_ROLE, InterfaceId, MINTER_ROLE } from "@gemunion/contracts-constants";
import { shouldBeAccessible, shouldSupportsInterface } from "@gemunion/contracts-mocha";

import { shouldERC721Burnable } from "../shared/burnable/enumerable/burn";
import { shouldERC721Capped } from "../shared/capped/enumerable/capped";
import { shouldERC721Base } from "../shared/base/enumerable";
import { shouldERC721Royalty } from "../shared/royalty/enumerable";
import { shouldERC721Enumerable } from "../shared/enumerable";
import { deployErc721Base } from "../shared/fixtures";

use(solidity);

describe("ERC721ABCER", function () {
  const factory = () => deployErc721Base(this.title);

  shouldERC721Base(factory);
  shouldBeAccessible(factory)(DEFAULT_ADMIN_ROLE, MINTER_ROLE);
  shouldERC721Burnable(factory);
  shouldERC721Capped(factory);
  shouldERC721Enumerable(factory);
  shouldERC721Royalty(factory);

  shouldSupportsInterface(factory)(
    InterfaceId.IERC165,
    InterfaceId.IAccessControl,
    InterfaceId.IERC721,
    InterfaceId.IERC721Metadata,
    InterfaceId.IERC721Enumerable,
    InterfaceId.IRoyalty,
  );
});
