/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC721ReceiverUpgradeable, IERC721ReceiverUpgradeableInterface } from "../IERC721ReceiverUpgradeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC721ReceiverUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721ReceiverUpgradeableInterface {
    return new utils.Interface(_abi) as IERC721ReceiverUpgradeableInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IERC721ReceiverUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as IERC721ReceiverUpgradeable;
  }
}
