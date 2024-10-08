// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+opensource@gmail.com
// Website: https://ethberry.io/

pragma solidity ^0.8.20;

import { VRFConsumerBase } from "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBase.sol";

abstract contract ChainLinkBase is VRFConsumerBase {
  bytes32 internal immutable _keyHash;
  uint256 internal immutable _fee;

  constructor(address vrf, address link, bytes32 keyHash, uint256 fee) VRFConsumerBase(vrf, link) {
    _fee = fee;
    _keyHash = keyHash;
  }

  function getRandomNumber() internal virtual returns (bytes32 requestId) {
    require(LINK.balanceOf(address(this)) >= _fee, "ERC721ChainLink: Not enough LINK");
    requestId = VRFConsumerBase.requestRandomness(_keyHash, _fee);
    return requestId;
  }
}
