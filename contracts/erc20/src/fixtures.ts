import { ethers } from "hardhat";

import { amount, tokenName, tokenSymbol } from "@ethberry/contracts-constants";

export async function deployERC20(name: string) {
  const erc20Factory = await ethers.getContractFactory(name);

  const args = name
    .substr(5)
    .split("")
    .reduce(
      (memo, current) => {
        switch (current) {
          case "C":
            memo.push(amount);
            break;
          default:
            break;
        }

        return memo;
      },
      [tokenName, tokenSymbol] as Array<string | bigint>,
    );

  return erc20Factory.deploy(...args);
}
