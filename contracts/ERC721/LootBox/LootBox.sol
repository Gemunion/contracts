// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";

import "../ERC721TradableUpgradeable.sol";
import "../IERC721Factory.sol";
import "../Loci/Loci.sol";


contract LootBox is Initializable, ERC721TradableUpgradeable {
    using AddressUpgradeable for address;

    IERC721Factory _factory;

    function initialize(
        string memory _name,
        string memory _symbol,
        string memory _baseURI
    ) public override initializer {
        __ERC721Tradable_init(_name, _symbol, _baseURI, 100);
    }

    function setFactory(address factory_) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(factory_.isContract(), "LootBox: The Factory must be a deployed contract");
        _factory = IERC721Factory(factory_);
    }

    function unpack(uint256 _tokenId) public {
        require(ownerOf(_tokenId) == _msgSender());

        _factory.mint(1, _msgSender());

        _burn(_tokenId);
    }
}