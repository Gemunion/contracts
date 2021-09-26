/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PriceOracle, PriceOracleInterface } from "../PriceOracle";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "PriceChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceInWei",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newPrice",
        type: "uint256",
      },
    ],
    name: "updatePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106d1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80638d6cc56d116100505780638d6cc56d146100a55780638da5cb5b146100b8578063f2fde38b146100d357600080fd5b80633c8da58814610077578063715018a6146100935780638129fc1c1461009d575b600080fd5b61008060655481565b6040519081526020015b60405180910390f35b61009b6100e6565b005b61009b610151565b61009b6100b3366004610683565b610211565b6033546040516001600160a01b03909116815260200161008a565b61009b6100e1366004610655565b6102f6565b6033546001600160a01b031633146101455760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61014f60006103d1565b565b600054610100900460ff168061016a575060005460ff16155b6101cd5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161013c565b600054610100900460ff161580156101ef576000805461ffff19166101011790555b6101f761043b565b6001606555801561020e576000805461ff00191690555b50565b6033546001600160a01b0316331461026b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161013c565b600081116102bb5760405162461bcd60e51b815260206004820152601d60248201527f50726963652073686f756c6420626520626967676572207468616e2030000000604482015260640161013c565b60658190556040518181527fa6dc15bdb68da224c66db4b3838d9a2b205138e8cff6774e57d0af91e196d6229060200160405180910390a150565b6033546001600160a01b031633146103505760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161013c565b6001600160a01b0381166103cc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161013c565b61020e815b603380546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1680610454575060005460ff16155b6104b75760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161013c565b600054610100900460ff161580156104d9576000805461ffff19166101011790555b6104e16104fd565b6104e96105ae565b801561020e576000805461ff001916905550565b600054610100900460ff1680610516575060005460ff16155b6105795760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161013c565b600054610100900460ff161580156104e9576000805461ffff1916610101179055801561020e576000805461ff001916905550565b600054610100900460ff16806105c7575060005460ff16155b61062a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161013c565b600054610100900460ff1615801561064c576000805461ffff19166101011790555b6104e9336103d1565b600060208284031215610666578081fd5b81356001600160a01b038116811461067c578182fd5b9392505050565b600060208284031215610694578081fd5b503591905056fea2646970667358221220847098ab4481ef4064ae14c7cede10f725383f6fa721be7f1152687d61ac30fe64736f6c63430008040033";

export class PriceOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PriceOracle> {
    return super.deploy(overrides || {}) as Promise<PriceOracle>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PriceOracle {
    return super.attach(address) as PriceOracle;
  }
  connect(signer: Signer): PriceOracle__factory {
    return super.connect(signer) as PriceOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceOracleInterface {
    return new utils.Interface(_abi) as PriceOracleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PriceOracle {
    return new Contract(address, _abi, signerOrProvider) as PriceOracle;
  }
}
