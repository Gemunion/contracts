// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+opensource@gmail.com
// Website: https://ethberry.io/

pragma solidity ^0.8.20;

import { ERC20, IERC20, IERC20Metadata } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { ERC20Burnable } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

import { ERC1363 } from "@ethberry/contracts-erc1363/contracts/extensions/ERC1363.sol";

contract ERC20OB is Ownable, ERC20Burnable, ERC1363 {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) Ownable(_msgSender()) {}

  function mint(address to, uint256 amount) public virtual onlyOwner {
    _mint(to, amount);
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
    return
      interfaceId == type(IERC20).interfaceId ||
      interfaceId == type(IERC20Metadata).interfaceId ||
      super.supportsInterface(interfaceId);
  }
}
