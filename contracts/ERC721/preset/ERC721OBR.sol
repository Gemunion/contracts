// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+gemunion@gmail.com
// Website: https://gemunion.io/

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "../interfaces/IERC721Royalty.sol";

contract ERC721OBR is Ownable, ERC721Burnable, IERC721Royalty, ERC721Royalty {
  string internal _baseTokenURI;

  event DefaultRoyaltyInfo(address royaltyReceiver, uint96 royalty);
  event TokenRoyaltyInfo(uint256 tokenId, address royaltyReceiver, uint96 royalty);

  constructor(
    string memory name,
    string memory symbol,
    string memory baseTokenURI,
    uint96 royalty
  ) ERC721(name, symbol) {
    _baseTokenURI = baseTokenURI;

    _setDefaultRoyalty(_msgSender(), royalty);
  }

  function mint(address to, uint256 tokenId) public virtual onlyOwner {
    _mint(to, tokenId);
  }

  function safeMint(address to, uint256 tokenId) public virtual onlyOwner {
    _safeMint(to, tokenId);
  }

  function setDefaultRoyalty(address royaltyReceiver, uint96 royalty) public virtual override onlyOwner {
    super._setDefaultRoyalty(royaltyReceiver, royalty);
    emit DefaultRoyaltyInfo(royaltyReceiver, royalty);
  }

  function setTokenRoyalty(
    uint256 tokenId,
    address royaltyReceiver,
    uint96 royalty
  ) public virtual override onlyOwner {
    super._setTokenRoyalty(tokenId, royaltyReceiver, royalty);
    emit TokenRoyaltyInfo(tokenId, royaltyReceiver, royalty);
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721Royalty) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return _baseTokenURI;
  }

  function _mint(address account, uint256 tokenId) internal virtual override(ERC721) {
    super._mint(account, tokenId);
  }

  function _safeMint(address account, uint256 tokenId) internal virtual override(ERC721) {
    super._safeMint(account, tokenId);
  }

  function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721Royalty) {
    super._burn(tokenId);
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 tokenId
  ) internal virtual override(ERC721) {
    super._beforeTokenTransfer(from, to, tokenId);
  }
}
