// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+opensource@gmail.com
// Website: https://ethberry.io/

pragma solidity ^0.8.20;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721Burnable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import { ERC721Enumerable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

import { DEFAULT_ADMIN_ROLE, MINTER_ROLE } from "@ethberry/contracts-utils/contracts/roles.sol";

import { ERC721CappedEnumerable } from "../extensions/ERC721CappedEnumerable.sol";

contract ERC721ABEC is AccessControl, ERC721Burnable, ERC721CappedEnumerable {
  uint256 internal _nextTokenId;

  constructor(string memory name, string memory symbol, uint256 cap) ERC721(name, symbol) ERC721CappedEnumerable(cap) {
    _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _grantRole(MINTER_ROLE, _msgSender());
  }

  function mint(address to) public virtual onlyRole(MINTER_ROLE) {
    _mint(to, _nextTokenId++);
  }

  function safeMint(address to) public virtual onlyRole(MINTER_ROLE) {
    _safeMint(to, _nextTokenId++);
  }

  function getCurrentTokenIndex() public view returns (uint256) {
    return _nextTokenId;
  }

  function supportsInterface(
    bytes4 interfaceId
  ) public view virtual override(AccessControl, ERC721, ERC721Enumerable) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  function _update(
    address to,
    uint256 tokenId,
    address auth
  ) internal virtual override(ERC721, ERC721CappedEnumerable) returns (address) {
    return super._update(to, tokenId, auth);
  }

  function _increaseBalance(address account, uint128 amount) internal virtual override(ERC721, ERC721Enumerable) {
    super._increaseBalance(account, amount);
  }
}
