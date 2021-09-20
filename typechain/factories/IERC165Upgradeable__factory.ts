/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC165Upgradeable, IERC165UpgradeableInterface } from "../IERC165Upgradeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IERC165Upgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC165UpgradeableInterface {
    return new utils.Interface(_abi) as IERC165UpgradeableInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IERC165Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as IERC165Upgradeable;
  }
}
