// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun@gemunion.io
// Website: https://gemunion.io/

pragma solidity ^0.8.20;

import "./OwnableDelegateProxy.sol";

contract ProxyRegistry {
  mapping(address => OwnableDelegateProxy) public proxies;
}
