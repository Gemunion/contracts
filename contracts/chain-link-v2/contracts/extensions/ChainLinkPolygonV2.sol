// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+opensource@gmail.com
// Website: https://ethberry.io/

pragma solidity ^0.8.20;

import { ChainLinkBaseV2 } from "./ChainLinkBaseV2.sol";

abstract contract ChainLinkPolygonV2 is ChainLinkBaseV2 {
  constructor(
    uint16 minReqConfs,
    uint32 callbackGasLimit,
    uint32 numWords
  )
    ChainLinkBaseV2(
      address(0xAE975071Be8F8eE67addBC1A82488F1C24858067), // vrf
      0xcc294a196eeeb44da2888d17c0625cc88d70d9760a69d58d853ba6581a9ab0cd, // key hash 500 gwei
      minReqConfs,
      callbackGasLimit,
      numWords
    )
  {}
}
