import { shouldMint } from "./mint";
import { shouldBalanceOf } from "./balanceOf";
import { shouldTransfer } from "./transfer";
import { shouldTransferFrom } from "./transferFrom";
import { shouldApprove } from "./approve";
import type { IERC20Options } from "../shared/defaultMint";

export function shouldBehaveLikeERC20(factory: () => Promise<any>, options?: IERC20Options) {
  shouldMint(factory, options);
  shouldBalanceOf(factory, options);
  shouldTransfer(factory, options);
  shouldTransferFrom(factory, options);
  shouldApprove(factory, options);
}

export { shouldMint, shouldBalanceOf, shouldTransfer, shouldTransferFrom, shouldApprove };
