// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+opensource@gmail.com
// Website: https://ethberry.io/

pragma solidity ^0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { ERC20Capped } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

import { ERC20OB } from "./ERC20OB.sol";

contract ERC20OBC is ERC20OB, ERC20Capped {
  constructor(string memory name, string memory symbol, uint256 cap) ERC20OB(name, symbol) ERC20Capped(cap) {}

  function _update(address from, address to, uint256 amount) internal virtual override(ERC20, ERC20Capped) {
    super._update(from, to, amount);
  }
}
