// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+opensource@gmail.com
// Website: https://ethberry.io/

pragma solidity ^0.8.20;

import { ChainLinkBase } from "./ChainLinkBase.sol";

abstract contract ChainLinkEthberry is ChainLinkBase {
  constructor()
    ChainLinkBase(
      address(0x86C86939c631D53c6D812625bD6Ccd5Bf5BEb774), // vrfCoordinator
      address(0x1fa66727cDD4e3e4a6debE4adF84985873F6cd8a), // LINK token
      0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311, // system hash
      0.01 ether // fee
    )
  {}
}
