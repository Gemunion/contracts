/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PriceOracle, PriceOracleInterface } from "../PriceOracle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
  "0x608060405234801561001057600080fd5b50600060019054906101000a900460ff1680610037575060008054906101000a900460ff16155b610076576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161006d90610110565b60405180910390fd5b60008060019054906101000a900460ff1615905080156100c6576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156100e75760008060016101000a81548160ff0219169083151502179055505b50610190565b60006100fa602e83610130565b915061010582610141565b604082019050919050565b60006020820190508181036000830152610129816100ed565b9050919050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b610b7e8061019f6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633c8da58814610067578063715018a6146100855780638129fc1c1461008f5780638d6cc56d146100995780638da5cb5b146100b5578063f2fde38b146100d3575b600080fd5b61006f6100ef565b60405161007c91906109c2565b60405180910390f35b61008d6100f5565b005b61009761017d565b005b6100b360048036038101906100ae9190610854565b610266565b005b6100bd610366565b6040516100ca9190610927565b60405180910390f35b6100ed60048036038101906100e8919061082b565b610390565b005b60655481565b6100fd610488565b73ffffffffffffffffffffffffffffffffffffffff1661011b610366565b73ffffffffffffffffffffffffffffffffffffffff1614610171576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161016890610982565b60405180910390fd5b61017b6000610490565b565b600060019054906101000a900460ff16806101a3575060008054906101000a900460ff16155b6101e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d990610962565b60405180910390fd5b60008060019054906101000a900460ff161590508015610232576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61023a610556565b600160658190555080156102635760008060016101000a81548160ff0219169083151502179055505b50565b61026e610488565b73ffffffffffffffffffffffffffffffffffffffff1661028c610366565b73ffffffffffffffffffffffffffffffffffffffff16146102e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d990610982565b60405180910390fd5b60008111610325576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031c906109a2565b60405180910390fd5b806065819055507fa6dc15bdb68da224c66db4b3838d9a2b205138e8cff6774e57d0af91e196d6228160405161035b91906109c2565b60405180910390a150565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610398610488565b73ffffffffffffffffffffffffffffffffffffffff166103b6610366565b73ffffffffffffffffffffffffffffffffffffffff161461040c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040390610982565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561047c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047390610942565b60405180910390fd5b61048581610490565b50565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600060019054906101000a900460ff168061057c575060008054906101000a900460ff16155b6105bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b290610962565b60405180910390fd5b60008060019054906101000a900460ff16159050801561060b576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61061361063f565b61061b610718565b801561063c5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680610665575060008054906101000a900460ff16155b6106a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069b90610962565b60405180910390fd5b60008060019054906101000a900460ff1615905080156106f4576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156107155760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff168061073e575060008054906101000a900460ff16155b61077d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077490610962565b60405180910390fd5b60008060019054906101000a900460ff1615905080156107cd576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6107dd6107d8610488565b610490565b80156107fe5760008060016101000a81548160ff0219169083151502179055505b50565b60008135905061081081610b1a565b92915050565b60008135905061082581610b31565b92915050565b60006020828403121561083d57600080fd5b600061084b84828501610801565b91505092915050565b60006020828403121561086657600080fd5b600061087484828501610816565b91505092915050565b610886816109ee565b82525050565b60006108996026836109dd565b91506108a482610a2a565b604082019050919050565b60006108bc602e836109dd565b91506108c782610a79565b604082019050919050565b60006108df6020836109dd565b91506108ea82610ac8565b602082019050919050565b6000610902601d836109dd565b915061090d82610af1565b602082019050919050565b61092181610a20565b82525050565b600060208201905061093c600083018461087d565b92915050565b6000602082019050818103600083015261095b8161088c565b9050919050565b6000602082019050818103600083015261097b816108af565b9050919050565b6000602082019050818103600083015261099b816108d2565b9050919050565b600060208201905081810360008301526109bb816108f5565b9050919050565b60006020820190506109d76000830184610918565b92915050565b600082825260208201905092915050565b60006109f982610a00565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f50726963652073686f756c6420626520626967676572207468616e2030000000600082015250565b610b23816109ee565b8114610b2e57600080fd5b50565b610b3a81610a20565b8114610b4557600080fd5b5056fea2646970667358221220acdc043f753df1b1f82f6bc4992959c411ba59c602d6d6f1cdffa36ae92546f364736f6c63430008040033";

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