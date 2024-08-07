// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun@gemunion.io
// Website: https://gemunion.io/

pragma solidity ^0.8.20;

import { ChainLinkBaseV2Plus } from "./ChainLinkBaseV2Plus.sol";

abstract contract ChainLinkPolygonV2Plus is ChainLinkBaseV2Plus {
  constructor(
    uint16 minReqConfs,
    uint32 callbackGasLimit,
    uint32 numWords
  )
   ChainLinkBaseV2Plus(
      address(0xec0Ed46f36576541C75739E915ADbCb3DE24bD77), // vrfCoordinator Polygon mainnet
      0x0ffbbd0c1c18c0263dd778dadd1d64240d7bc338d95fec1cf0473928ca7eaf9e, // keyHash 200 gwei
      minReqConfs,
      callbackGasLimit,
      numWords
    )
  {}
}
