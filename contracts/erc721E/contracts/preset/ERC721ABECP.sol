// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+opensource@gmail.com
// Website: https://ethberry.io/

pragma solidity ^0.8.20;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721Pausable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";

import { PAUSER_ROLE } from "@ethberry/contracts-utils/contracts/roles.sol";

import { ERC721ABEC } from "./ERC721ABEC.sol";

contract ERC721ABECP is ERC721ABEC, ERC721Pausable {
  constructor(string memory name, string memory symbol, uint256 cap) ERC721ABEC(name, symbol, cap) {
    _grantRole(PAUSER_ROLE, _msgSender());
  }

  function pause() public virtual onlyRole(PAUSER_ROLE) {
    _pause();
  }

  function unpause() public virtual onlyRole(PAUSER_ROLE) {
    _unpause();
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721ABEC) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  function _update(
    address to,
    uint256 tokenId,
    address auth
  ) internal virtual override(ERC721ABEC, ERC721Pausable) returns (address) {
    return super._update(to, tokenId, auth);
  }

  function _increaseBalance(address account, uint128 amount) internal virtual override(ERC721, ERC721ABEC) {
    super._increaseBalance(account, amount);
  }
}
