// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+opensource@gmail.com
// Website: https://ethberry.io/

pragma solidity ^0.8.20;

import { ERC165 } from "@openzeppelin/contracts/utils/introspection/ERC165.sol";

import { PaymentSplitter } from "./PaymentSplitter.sol";
import { CoinHolder } from "./Holder.sol";

contract SplitterWallet is PaymentSplitter, CoinHolder {
   constructor(address[] memory payees, uint256[] memory shares) PaymentSplitter (payees, shares) { }
}
