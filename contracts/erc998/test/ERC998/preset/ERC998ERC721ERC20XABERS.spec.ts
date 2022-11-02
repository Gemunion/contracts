import { use } from "chai";
import { solidity } from "ethereum-waffle";

import { DEFAULT_ADMIN_ROLE, InterfaceId, MINTER_ROLE } from "../../constants";
import { shouldERC721Base } from "../../ERC721/shared/base/enumerable";
import { shouldERC721Accessible } from "../shared/accessible";
import { shouldERC721Burnable } from "../../ERC721/shared/burnable/enumerable/burn";
import { shouldERC721Enumerable } from "../../ERC721/shared/enumerable";
import { shouldERC721Royalty } from "../../ERC721/shared/royalty/enumerable";
import { shouldERC721Storage } from "../../ERC721/shared/storage/enumerable/storage";
import { shouldERC998Base } from "../shared/base/basic";
import { shouldERC998ERC20 } from "../shared/erc20/basic";
import { shouldERC998ERC20Enumerable } from "../shared/erc20/enumerable";
import { shouldSupportsInterface } from "../shared/supportInterface";

use(solidity);

describe("ERC998ERC721ERC20XABERS", function () {
  const name = "ERC998ERC721ERC20XABERS";

  shouldERC721Base(name);
  shouldERC721Accessible(name)(DEFAULT_ADMIN_ROLE, MINTER_ROLE);
  shouldERC721Burnable(name);
  shouldERC721Enumerable(name);
  shouldERC721Royalty(name);
  shouldERC721Storage(name);

  shouldERC998Base(name);
  shouldERC998ERC20(name);
  shouldERC998ERC20Enumerable(name);

  shouldSupportsInterface(name)(
    InterfaceId.IERC165,
    InterfaceId.IAccessControl,
    InterfaceId.IERC721,
    InterfaceId.IERC721Metadata,
    InterfaceId.IERC721Enumerable,
    InterfaceId.IERC998TD,
    InterfaceId.IERC998TDERC20,
    InterfaceId.IERC998TDERC20Enumerable,
    InterfaceId.IRoyalty,
  );
});