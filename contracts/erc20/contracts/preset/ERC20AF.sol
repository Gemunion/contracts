// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+opensource@gmail.com
// Website: https://ethberry.io/

pragma solidity ^0.8.20;

import { ERC20, IERC20, IERC20Metadata } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { ERC20FlashMint } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

import { DEFAULT_ADMIN_ROLE, MINTER_ROLE } from "@ethberry/contracts-utils/contracts/roles.sol";

contract ERC20AF is AccessControl, ERC20FlashMint {
  uint256 _flashFeeAmount;
  address _flashFeeReceiverAddress;

  constructor(string memory name, string memory symbol) ERC20(name, symbol) {
    _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _grantRole(MINTER_ROLE, _msgSender());
  }

  function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
    _mint(to, amount);
  }

  function _flashFee(address token, uint256 value) internal view virtual override returns (uint256) {
    // silence warning about unused variable without the addition of bytecode.
    token;
    value;
    return _flashFeeAmount;
  }

  function setFlashFee(uint256 amount) public onlyRole(DEFAULT_ADMIN_ROLE) {
    _flashFeeAmount = amount;
  }

  function setFlashFeeReceiver(address receiver) public onlyRole(DEFAULT_ADMIN_ROLE) {
    _flashFeeReceiverAddress = receiver;
  }

  function flashFeeReceiver() public view returns (address) {
    return _flashFeeReceiver();
  }

  function _flashFeeReceiver() internal view override returns (address) {
    return _flashFeeReceiverAddress;
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override(AccessControl) returns (bool) {
    return
      interfaceId == type(IERC20).interfaceId ||
      interfaceId == type(IERC20Metadata).interfaceId ||
      super.supportsInterface(interfaceId);
  }
}
