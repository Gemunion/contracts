// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+gemunion@gmail.com
// Website: https://gemunion.io/

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract ERC721ACB is AccessControl, ERC721Burnable {
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

  string internal _baseTokenURI;

  constructor(
    string memory name,
    string memory symbol,
    string memory baseTokenURI
  ) ERC721(name, symbol) {
    _baseTokenURI = baseTokenURI;

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _setupRole(MINTER_ROLE, _msgSender());
  }

  function mint(address to, uint256 tokenId) public virtual onlyRole(MINTER_ROLE) {
    _mint(to, tokenId);
  }

  function safeMint(address to, uint256 tokenId) public virtual onlyRole(MINTER_ROLE) {
    _safeMint(to, tokenId);
  }

  /**
   * @dev See {IERC165-supportsInterface}.
   */
  function supportsInterface(bytes4 interfaceId) public view virtual override(AccessControl, ERC721) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return _baseTokenURI;
  }
}