// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+opensource@gmail.com
// Website: https://ethberry.io/

pragma solidity ^0.8.20;

interface IERC1155Mintable {
  function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) external;

  function mint(address to, uint256 id, uint256 amount, bytes memory data) external;

  function burn(address from, uint256 id, uint256 amount) external;

  function burnBatch(address from, uint256[] memory ids, uint256[] memory amounts) external;
}
