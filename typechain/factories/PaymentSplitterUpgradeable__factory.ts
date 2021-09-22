/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PaymentSplitterUpgradeable, PaymentSplitterUpgradeableInterface } from "../PaymentSplitterUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "payee",
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
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "shares",
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
    name: "totalReleased",
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
    name: "totalShares",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610cad806100206000396000f3fe6080604052600436106100595760003560e01c806319165587146100a55780633a98ef39146100ce5780638b83209b146100f95780639852595c14610136578063ce7c2ac214610173578063e33b7de3146101b0576100a0565b366100a0577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be7706100876101db565b34604051610096929190610842565b60405180910390a1005b600080fd5b3480156100b157600080fd5b506100cc60048036038101906100c791906106bb565b6101e3565b005b3480156100da57600080fd5b506100e361044b565b6040516100f091906108eb565b60405180910390f35b34801561010557600080fd5b50610120600480360381019061011b91906106e4565b610455565b60405161012d91906107fe565b60405180910390f35b34801561014257600080fd5b5061015d60048036038101906101589190610692565b6104c3565b60405161016a91906108eb565b60405180910390f35b34801561017f57600080fd5b5061019a60048036038101906101959190610692565b61050c565b6040516101a791906108eb565b60405180910390f35b3480156101bc57600080fd5b506101c5610555565b6040516101d291906108eb565b60405180910390f35b600033905090565b6000603560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610265576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025c9061086b565b60405180910390fd5b6000603454476102759190610922565b90506000603660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054603354603560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548461030791906109a9565b6103119190610978565b61031b9190610a03565b90506000811415610361576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610358906108cb565b60405180910390fd5b80603660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103ac9190610922565b603660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806034546103fd9190610922565b60348190555061040d838261055f565b7fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056838260405161043e929190610819565b60405180910390a1505050565b6000603354905090565b600060378281548110610491577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000603660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000603560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000603454905090565b804710156105a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610599906108ab565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516105c8906107e9565b60006040518083038185875af1925050503d8060008114610605576040519150601f19603f3d011682016040523d82523d6000602084013e61060a565b606091505b505090508061064e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106459061088b565b60405180910390fd5b505050565b60008135905061066281610c32565b92915050565b60008135905061067781610c49565b92915050565b60008135905061068c81610c60565b92915050565b6000602082840312156106a457600080fd5b60006106b284828501610653565b91505092915050565b6000602082840312156106cd57600080fd5b60006106db84828501610668565b91505092915050565b6000602082840312156106f657600080fd5b60006107048482850161067d565b91505092915050565b61071681610a85565b82525050565b61072581610a37565b82525050565b6000610738602683610911565b915061074382610b19565b604082019050919050565b600061075b603a83610911565b915061076682610b68565b604082019050919050565b600061077e601d83610911565b915061078982610bb7565b602082019050919050565b60006107a1602b83610911565b91506107ac82610be0565b604082019050919050565b60006107c4600083610906565b91506107cf82610c2f565b600082019050919050565b6107e381610a7b565b82525050565b60006107f4826107b7565b9150819050919050565b6000602082019050610813600083018461071c565b92915050565b600060408201905061082e600083018561070d565b61083b60208301846107da565b9392505050565b6000604082019050610857600083018561071c565b61086460208301846107da565b9392505050565b600060208201905081810360008301526108848161072b565b9050919050565b600060208201905081810360008301526108a48161074e565b9050919050565b600060208201905081810360008301526108c481610771565b9050919050565b600060208201905081810360008301526108e481610794565b9050919050565b600060208201905061090060008301846107da565b92915050565b600081905092915050565b600082825260208201905092915050565b600061092d82610a7b565b915061093883610a7b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561096d5761096c610abb565b5b828201905092915050565b600061098382610a7b565b915061098e83610a7b565b92508261099e5761099d610aea565b5b828204905092915050565b60006109b482610a7b565b91506109bf83610a7b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156109f8576109f7610abb565b5b828202905092915050565b6000610a0e82610a7b565b9150610a1983610a7b565b925082821015610a2c57610a2b610abb565b5b828203905092915050565b6000610a4282610a5b565b9050919050565b6000610a5482610a5b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a9082610a97565b9050919050565b6000610aa282610aa9565b9050919050565b6000610ab482610a5b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060008201527f7368617265730000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201527f6563697069656e74206d61792068617665207265766572746564000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e6365000000600082015250565b7f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060008201527f647565207061796d656e74000000000000000000000000000000000000000000602082015250565b50565b610c3b81610a37565b8114610c4657600080fd5b50565b610c5281610a49565b8114610c5d57600080fd5b50565b610c6981610a7b565b8114610c7457600080fd5b5056fea26469706673582212200ea391be2682e75e530ae5185b5a1fd6b49fe78826873cf050bf6267908584f864736f6c63430008040033";

export class PaymentSplitterUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PaymentSplitterUpgradeable> {
    return super.deploy(overrides || {}) as Promise<PaymentSplitterUpgradeable>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PaymentSplitterUpgradeable {
    return super.attach(address) as PaymentSplitterUpgradeable;
  }
  connect(signer: Signer): PaymentSplitterUpgradeable__factory {
    return super.connect(signer) as PaymentSplitterUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentSplitterUpgradeableInterface {
    return new utils.Interface(_abi) as PaymentSplitterUpgradeableInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PaymentSplitterUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as PaymentSplitterUpgradeable;
  }
}