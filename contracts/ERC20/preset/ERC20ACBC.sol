// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+gemunion@gmail.com
// Website: https://gemunion.io/

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

import "./ERC20ACB.sol";

contract ERC20ACBC is ERC20ACB, ERC20Capped {
  constructor(
    string memory name,
    string memory symbol,
    uint256 cap
  ) ERC20ACB(name, symbol) ERC20Capped(cap) {}

  function _mint(address account, uint256 amount) internal virtual override(ERC20, ERC20Capped) {
    super._mint(account, amount);
  }
}