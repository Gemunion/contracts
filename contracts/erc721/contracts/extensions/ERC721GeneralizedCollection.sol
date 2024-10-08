// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+opensource@gmail.com
// Website: https://ethberry.io/

pragma solidity ^0.8.20;

import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

import { GeneralizedCollection } from "@ethberry/contracts-utils/contracts/GeneralizedCollection.sol";
import { METADATA_ROLE } from "@ethberry/contracts-utils/contracts/roles.sol";

import { IERC721GeneralizedCollection } from "../interfaces/IERC721GeneralizedCollection.sol";

abstract contract ERC721GeneralizedCollection is AccessControl, IERC721GeneralizedCollection, GeneralizedCollection {
  constructor() {
    _grantRole(METADATA_ROLE, _msgSender());
  }

  function getTokenMetadata(uint256 tokenId) external view returns (Metadata[] memory) {
    uint256 arrSize = recordStructs[tokenId].fieldKeyList.length;
    Metadata[] memory tokenMetadata = new Metadata[](arrSize);
    for (uint8 i = 0; i < arrSize;) {
      bytes32 metaField = recordStructs[tokenId].fieldKeyList[i];
      tokenMetadata[i] = Metadata(metaField, recordStructs[tokenId].fieldStructs[metaField].value);
      unchecked {
        i++;
      }
    }
    return tokenMetadata;
  }

//    function setTokenMetadata(uint256 tokenId, Metadata[] memory metadata) public onlyRole(METADATA_ROLE) {
//      uint256 arrSize = metadata.length;
//      for (uint8 i = 0; i < arrSize;) {
//        _upsertRecordField(tokenId, metadata[i].key, metadata[i].value);
//        unchecked {
//          i++;
//        }
//      }
//    }

  function getRecordFieldValue(uint256 pk, bytes32 fieldKey) external view returns (uint256) {
    return super._getRecordFieldValue(pk, fieldKey);
  }
}
