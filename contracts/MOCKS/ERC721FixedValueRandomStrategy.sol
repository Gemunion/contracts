// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+gemunion@gmail.com
// Website: https://gemunion.io/

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/AccessControl.sol";

import "../ERC721/ChainLink/strategies/FixedValuesRandomStrategy.sol";

contract ERC721FixedValueRandomStrategy is AccessControl, FixedValuesRandomStrategy {
  constructor() {
    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
  }

  function setDispersion(uint8[] memory dispersion) external onlyRole(DEFAULT_ADMIN_ROLE) {
    _setDispersion(dispersion);
  }

  function getDispersion(uint256 randomness) external view returns (uint8) {
    return _getDispersion(randomness);
  }
}
