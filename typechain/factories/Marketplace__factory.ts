/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Marketplace, MarketplaceInterface } from "../Marketplace";

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
        indexed: false,
        internalType: "uint256",
        name: "ownerCutPerMillion",
        type: "uint256",
      },
    ],
    name: "ChangedOwnerCutPerMillion",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "publicationFee",
        type: "uint256",
      },
    ],
    name: "ChangedPublicationFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
    ],
    name: "OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "priceInWei",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiresAt",
        type: "uint256",
      },
    ],
    name: "OrderCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalPrice",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "OrderSuccessful",
    type: "event",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "ERC721_Interface",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptedToken",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
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
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceInWei",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiresAt",
        type: "uint256",
      },
    ],
    name: "createOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "executeOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_acceptedToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ownerCutPerMillion",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orderByAssetId",
    outputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiresAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "ownerCutPerMillion",
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
    name: "paused",
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
  {
    inputs: [],
    name: "publicationFeeInWei",
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
        internalType: "uint256",
        name: "_ownerCutPerMillion",
        type: "uint256",
      },
    ],
    name: "setOwnerCutPerMillion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_publicationFee",
        type: "uint256",
      },
    ],
    name: "setPublicationFee",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50600060019054906101000a900460ff168062000039575060008054906101000a900460ff16155b6200007b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000072906200011c565b60405180910390fd5b60008060019054906101000a900460ff161590508015620000cc576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8015620000ee5760008060016101000a81548160ff0219169083151502179055505b506200019e565b600062000104602e836200013e565b915062000111826200014f565b604082019050919050565b600060208201905081810360008301526200013781620000f5565b9050919050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b61363d80620001ae6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063af8996f111610066578063af8996f114610228578063cd6dc68714610244578063e61f385114610260578063f2fde38b14610294576100f5565b80638da5cb5b146101b2578063a01f79d4146101d0578063ae4f1198146101ee578063ae7b03331461020c576100f5565b80635c975abb116100d35780635c975abb146101525780636a206137146101705780636f652e1a1461018c578063715018a6146101a8576100f5565b806319dad16d146100fa5780632b4c32be14610116578063451c3d8014610134575b600080fd5b610114600480360381019061010f919061253d565b6102b0565b005b61011e6103b4565b60405161012b9190612b02565b60405180910390f35b61013c6103bf565b6040516101499190612b1d565b60405180910390f35b61015a6103e5565b60405161016791906129ef565b60405180910390f35b61018a60048036038101906101859190612426565b6103fc565b005b6101a660048036038101906101a191906124b1565b610453565b005b6101b06104ad565b005b6101ba610535565b6040516101c79190612974565b60405180910390f35b6101d861055f565b6040516101e59190612dd8565b60405180910390f35b6101f6610565565b6040516102039190612dd8565b60405180910390f35b61022660048036038101906102219190612462565b61056b565b005b610242600480360381019061023d919061253d565b6105c4565b005b61025e60048036038101906102599190612426565b610683565b005b61027a60048036038101906102759190612426565b610816565b60405161028b959493929190612a33565b60405180910390f35b6102ae60048036038101906102a991906123d4565b610899565b005b6102b8610991565b73ffffffffffffffffffffffffffffffffffffffff166102d6610535565b73ffffffffffffffffffffffffffffffffffffffff161461032c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032390612cd8565b60405180910390fd5b620f42408110610371576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036890612c98565b60405180910390fd5b806099819055507ffa406a120a9e7f2b332bfb7a43d3bf1c3f079262202907a6b69c94b2821a02c66099546040516103a99190612dd8565b60405180910390a150565b6380ac58cd60e01b81565b609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000606560009054906101000a900460ff16905090565b6104046103e5565b15610444576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043b90612c58565b60405180910390fd5b61044e8282610999565b505050565b61045b6103e5565b1561049b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049290612c58565b60405180910390fd5b6104a784848484610d02565b50505050565b6104b5610991565b73ffffffffffffffffffffffffffffffffffffffff166104d3610535565b73ffffffffffffffffffffffffffffffffffffffff1614610529576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090612cd8565b60405180910390fd5b6105336000611320565b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60995481565b609a5481565b6105736103e5565b156105b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105aa90612c58565b60405180910390fd5b6105be8383836113e6565b50505050565b6105cc610991565b73ffffffffffffffffffffffffffffffffffffffff166105ea610535565b73ffffffffffffffffffffffffffffffffffffffff1614610640576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063790612cd8565b60405180910390fd5b80609a819055507fe7fa8737293f41b5dfa0d5c3e552860a06275bed7015581b083c7be7003308ba609a546040516106789190612dd8565b60405180910390a150565b600060019054906101000a900460ff16806106a9575060008054906101000a900460ff16155b6106e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106df90612cb8565b60405180910390fd5b60008060019054906101000a900460ff161590508015610738576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610740611bc2565b610748611cab565b610751826102b0565b6107708373ffffffffffffffffffffffffffffffffffffffff16611d94565b6107af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a690612b78565b60405180910390fd5b82609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156108115760008060016101000a81548160ff0219169083151502179055505b505050565b6098602052816000526040600020602052806000526040600020600091509150508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154905085565b6108a1610991565b73ffffffffffffffffffffffffffffffffffffffff166108bf610535565b73ffffffffffffffffffffffffffffffffffffffff1614610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090c90612cd8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610985576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097c90612b98565b60405180910390fd5b61098e81611320565b50565b600033905090565b6109a1612322565b60006109ab610991565b90506000609860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008581526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152505090506000801b81600001511415610b20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1790612cf8565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16816020015173ffffffffffffffffffffffffffffffffffffffff161480610b905750610b61610535565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b610bcf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc690612bd8565b60405180910390fd5b600081600001519050600082602001519050600083604001519050609860008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008881526020019081526020016000206000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556003820160009055600482016000905550508173ffffffffffffffffffffffffffffffffffffffff16877f0325426328de5b91ae4ad8462ad4076de4bcaf4551e81556185cacde5a425c6b8584604051610cec929190612a0a565b60405180910390a3839550505050505092915050565b610d0b84611da7565b6000610d15610991565b9050600085905060008173ffffffffffffffffffffffffffffffffffffffff16636352211e876040518263ffffffff1660e01b8152600401610d579190612dd8565b60206040518083038186803b158015610d6f57600080fd5b505afa158015610d83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da791906123fd565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610e17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0e90612c38565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1663081812fc886040518263ffffffff1660e01b8152600401610e679190612dd8565b60206040518083038186803b158015610e7f57600080fd5b505afa158015610e93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb791906123fd565b73ffffffffffffffffffffffffffffffffffffffff161480610f6057508173ffffffffffffffffffffffffffffffffffffffff1663e985e9c582306040518363ffffffff1660e01b8152600401610f0f92919061298f565b60206040518083038186803b158015610f2757600080fd5b505afa158015610f3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5f9190612514565b5b610f9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9690612c78565b60405180910390fd5b60008511610fe2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd990612d98565b60405180910390fd5b610ff6603c42611e7790919063ffffffff16565b8411611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102e90612bb8565b60405180910390fd5b60004282888a89604051602001611052959493929190612915565b6040516020818303038152906040528051906020012090506040518060a001604052808281526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff16815260200187815260200186815250609860008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008981526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030155608082015181600401559050506000609a5411156112c157609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8561120e610535565b609a546040518463ffffffff1660e01b815260040161122f939291906129b8565b602060405180830381600087803b15801561124957600080fd5b505af115801561125d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112819190612514565b6112c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b790612bf8565b60405180910390fd5b5b8173ffffffffffffffffffffffffffffffffffffffff16877f84c66c3f7ba4b390e20e8e8233e2a516f3ce34a72749e4f12bd010dfba238039838b8a8a60405161130e9493929190612abd565b60405180910390a35050505050505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6113ee612322565b6113f784611da7565b6000611401610991565b905060008590506000609860008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152505090506000801b8160000151141561157b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157290612cf8565b60405180910390fd5b600081602001519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156115f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115eb90612b58565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611663576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165a90612bd8565b60405180910390fd5b858260600151146116a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116a090612d78565b60405180910390fd5b816080015142106116ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e690612d38565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff16636352211e886040518263ffffffff1660e01b81526004016117289190612dd8565b60206040518083038186803b15801561174057600080fd5b505afa158015611754573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061177891906123fd565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146117e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117dc90612db8565b60405180910390fd5b60008083600001519050609860008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a81526020019081526020016000206000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600382016000905560048201600090555050600060995411156119d7576118dd620f42406118cf6099548b611e8d90919063ffffffff16565b611ea390919063ffffffff16565b9150609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd87611926610535565b856040518463ffffffff1660e01b8152600401611945939291906129b8565b602060405180830381600087803b15801561195f57600080fd5b505af1158015611973573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119979190612514565b6119d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119cd90612b38565b60405180910390fd5b5b609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8785611a2a868d611eb990919063ffffffff16565b6040518463ffffffff1660e01b8152600401611a48939291906129b8565b602060405180830381600087803b158015611a6257600080fd5b505af1158015611a76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a9a9190612514565b611ad9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ad090612d58565b60405180910390fd5b8473ffffffffffffffffffffffffffffffffffffffff166342842e0e84888c6040518463ffffffff1660e01b8152600401611b16939291906129b8565b600060405180830381600087803b158015611b3057600080fd5b505af1158015611b44573d6000803e3d6000fd5b505050508573ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff168a7f695ec315e8a642a74d450a4505eeea53df699b47a7378c7d752e97d5b16eb9bb848e8d604051611baa93929190612a86565b60405180910390a48396505050505050509392505050565b600060019054906101000a900460ff1680611be8575060008054906101000a900460ff16155b611c27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c1e90612cb8565b60405180910390fd5b60008060019054906101000a900460ff161590508015611c77576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611c7f611ecf565b611c87611fa8565b8015611ca85760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611cd1575060008054906101000a900460ff16155b611d10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d0790612cb8565b60405180910390fd5b60008060019054906101000a900460ff161590508015611d60576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611d68611ecf565b611d7061209c565b8015611d915760008060016101000a81548160ff0219169083151502179055505b50565b600080823b905060008111915050919050565b611dc68173ffffffffffffffffffffffffffffffffffffffff16611d94565b611e05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dfc90612d18565b60405180910390fd5b611e356380ac58cd60e01b8273ffffffffffffffffffffffffffffffffffffffff1661218590919063ffffffff16565b611e74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e6b90612c18565b60405180910390fd5b50565b60008183611e859190612e1a565b905092915050565b60008183611e9b9190612ea1565b905092915050565b60008183611eb19190612e70565b905092915050565b60008183611ec79190612efb565b905092915050565b600060019054906101000a900460ff1680611ef5575060008054906101000a900460ff16155b611f34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f2b90612cb8565b60405180910390fd5b60008060019054906101000a900460ff161590508015611f84576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8015611fa55760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611fce575060008054906101000a900460ff16155b61200d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161200490612cb8565b60405180910390fd5b60008060019054906101000a900460ff16159050801561205d576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6000606560006101000a81548160ff02191690831515021790555080156120995760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff16806120c2575060008054906101000a900460ff16155b612101576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120f890612cb8565b60405180910390fd5b60008060019054906101000a900460ff161590508015612151576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61216161215c610991565b611320565b80156121825760008060016101000a81548160ff0219169083151502179055505b50565b6000612190836121aa565b80156121a257506121a183836121f7565b5b905092915050565b60006121d6827f01ffc9a7000000000000000000000000000000000000000000000000000000006121f7565b80156121f057506121ee8263ffffffff60e01b6121f7565b155b9050919050565b6000806301ffc9a760e01b836040516024016122139190612b02565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000808573ffffffffffffffffffffffffffffffffffffffff166175308460405161229d91906128fe565b6000604051808303818686fa925050503d80600081146122d9576040519150601f19603f3d011682016040523d82523d6000602084013e6122de565b606091505b50915091506020815110156122f9576000935050505061231c565b8180156123165750808060200190518101906123159190612514565b5b93505050505b92915050565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b60008135905061238f816135c2565b92915050565b6000815190506123a4816135c2565b92915050565b6000815190506123b9816135d9565b92915050565b6000813590506123ce816135f0565b92915050565b6000602082840312156123e657600080fd5b60006123f484828501612380565b91505092915050565b60006020828403121561240f57600080fd5b600061241d84828501612395565b91505092915050565b6000806040838503121561243957600080fd5b600061244785828601612380565b9250506020612458858286016123bf565b9150509250929050565b60008060006060848603121561247757600080fd5b600061248586828701612380565b9350506020612496868287016123bf565b92505060406124a7868287016123bf565b9150509250925092565b600080600080608085870312156124c757600080fd5b60006124d587828801612380565b94505060206124e6878288016123bf565b93505060406124f7878288016123bf565b9250506060612508878288016123bf565b91505092959194509250565b60006020828403121561252657600080fd5b6000612534848285016123aa565b91505092915050565b60006020828403121561254f57600080fd5b600061255d848285016123bf565b91505092915050565b61256f81612f2f565b82525050565b61258661258182612f2f565b613004565b82525050565b61259581612f41565b82525050565b6125a481612f4d565b82525050565b6125b381612f57565b82525050565b60006125c482612df3565b6125ce8185612dfe565b93506125de818560208601612fd1565b80840191505092915050565b6125f381612fad565b82525050565b6000612606603383612e09565b91506126118261309d565b604082019050919050565b6000612629600f83612e09565b9150612634826130ec565b602082019050919050565b600061264c603683612e09565b915061265782613115565b604082019050919050565b600061266f602683612e09565b915061267a82613164565b604082019050919050565b6000612692603683612e09565b915061269d826131b3565b604082019050919050565b60006126b5601183612e09565b91506126c082613202565b602082019050919050565b60006126d8603f83612e09565b91506126e38261322b565b604082019050919050565b60006126fb603583612e09565b91506127068261327a565b604082019050919050565b600061271e602083612e09565b9150612729826132c9565b602082019050919050565b6000612741601083612e09565b915061274c826132f2565b602082019050919050565b6000612764603283612e09565b915061276f8261331b565b604082019050919050565b6000612787602d83612e09565b91506127928261336a565b604082019050919050565b60006127aa602e83612e09565b91506127b5826133b9565b604082019050919050565b60006127cd602083612e09565b91506127d882613408565b602082019050919050565b60006127f0601383612e09565b91506127fb82613431565b602082019050919050565b6000612813602483612e09565b915061281e8261345a565b604082019050919050565b6000612836601183612e09565b9150612841826134a9565b602082019050919050565b6000612859603083612e09565b9150612864826134d2565b604082019050919050565b600061287c601883612e09565b915061288782613521565b602082019050919050565b600061289f601d83612e09565b91506128aa8261354a565b602082019050919050565b60006128c2602183612e09565b91506128cd82613573565b604082019050919050565b6128e181612fa3565b82525050565b6128f86128f382612fa3565b613028565b82525050565b600061290a82846125b9565b915081905092915050565b600061292182886128e7565b6020820191506129318287612575565b60148201915061294182866128e7565b6020820191506129518285612575565b60148201915061296182846128e7565b6020820191508190509695505050505050565b60006020820190506129896000830184612566565b92915050565b60006040820190506129a46000830185612566565b6129b16020830184612566565b9392505050565b60006060820190506129cd6000830186612566565b6129da6020830185612566565b6129e760408301846128d8565b949350505050565b6000602082019050612a04600083018461258c565b92915050565b6000604082019050612a1f600083018561259b565b612a2c6020830184612566565b9392505050565b600060a082019050612a48600083018861259b565b612a556020830187612566565b612a626040830186612566565b612a6f60608301856128d8565b612a7c60808301846128d8565b9695505050505050565b6000606082019050612a9b600083018661259b565b612aa86020830185612566565b612ab560408301846128d8565b949350505050565b6000608082019050612ad2600083018761259b565b612adf6020830186612566565b612aec60408301856128d8565b612af960608301846128d8565b95945050505050565b6000602082019050612b1760008301846125aa565b92915050565b6000602082019050612b3260008301846125ea565b92915050565b60006020820190508181036000830152612b51816125f9565b9050919050565b60006020820190508181036000830152612b718161261c565b9050919050565b60006020820190508181036000830152612b918161263f565b9050919050565b60006020820190508181036000830152612bb181612662565b9050919050565b60006020820190508181036000830152612bd181612685565b9050919050565b60006020820190508181036000830152612bf1816126a8565b9050919050565b60006020820190508181036000830152612c11816126cb565b9050919050565b60006020820190508181036000830152612c31816126ee565b9050919050565b60006020820190508181036000830152612c5181612711565b9050919050565b60006020820190508181036000830152612c7181612734565b9050919050565b60006020820190508181036000830152612c9181612757565b9050919050565b60006020820190508181036000830152612cb18161277a565b9050919050565b60006020820190508181036000830152612cd18161279d565b9050919050565b60006020820190508181036000830152612cf1816127c0565b9050919050565b60006020820190508181036000830152612d11816127e3565b9050919050565b60006020820190508181036000830152612d3181612806565b9050919050565b60006020820190508181036000830152612d5181612829565b9050919050565b60006020820190508181036000830152612d718161284c565b9050919050565b60006020820190508181036000830152612d918161286f565b9050919050565b60006020820190508181036000830152612db181612892565b9050919050565b60006020820190508181036000830152612dd1816128b5565b9050919050565b6000602082019050612ded60008301846128d8565b92915050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000612e2582612fa3565b9150612e3083612fa3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612e6557612e64613032565b5b828201905092915050565b6000612e7b82612fa3565b9150612e8683612fa3565b925082612e9657612e95613061565b5b828204905092915050565b6000612eac82612fa3565b9150612eb783612fa3565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612ef057612eef613032565b5b828202905092915050565b6000612f0682612fa3565b9150612f1183612fa3565b925082821015612f2457612f23613032565b5b828203905092915050565b6000612f3a82612f83565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612fb882612fbf565b9050919050565b6000612fca82612f83565b9050919050565b60005b83811015612fef578082015181840152602081019050612fd4565b83811115612ffe576000848401525b50505050565b600061300f82613016565b9050919050565b600061302182613090565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60008160601b9050919050565b7f5472616e73666572696e67207468652063757420746f20746865204d61726b6560008201527f74706c616365206f776e6572206661696c656400000000000000000000000000602082015250565b7f496e76616c696420616464726573730000000000000000000000000000000000600082015250565b7f54686520616363657074656420746f6b656e2061646472657373206d7573742060008201527f62652061206465706c6f79656420636f6e747261637400000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f5075626c69636174696f6e2073686f756c64206265206d6f7265207468616e2060008201527f31206d696e75746520696e207468652066757475726500000000000000000000602082015250565b7f556e617574686f72697a65642075736572000000000000000000000000000000600082015250565b7f5472616e73666572696e6720746865207075626c69636174696f6e206665652060008201527f746f20746865204d61726b6574706c616365206f776e6572206661696c656400602082015250565b7f546865204e465420636f6e74726163742068617320616e20696e76616c69642060008201527f45524337323120696d706c656d656e746174696f6e0000000000000000000000602082015250565b7f4f6e6c7920746865206f776e65722063616e20637265617465206f7264657273600082015250565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b7f54686520636f6e7472616374206973206e6f7420617574686f72697a6564207460008201527f6f206d616e616765207468652061737365740000000000000000000000000000602082015250565b7f546865206f776e6572206375742073686f756c64206265206265747765656e2060008201527f3020616e64203939392c39393900000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4173736574206e6f74207075626c697368656400000000000000000000000000600082015250565b7f546865204e465420416464726573732073686f756c64206265206120636f6e7460008201527f7261637400000000000000000000000000000000000000000000000000000000602082015250565b7f546865206f726465722065787069726564000000000000000000000000000000600082015250565b7f5472616e73666572696e67207468652073616c6520616d6f756e7420746f207460008201527f68652073656c6c6572206661696c656400000000000000000000000000000000602082015250565b7f546865207072696365206973206e6f7420636f72726563740000000000000000600082015250565b7f50726963652073686f756c6420626520626967676572207468616e2030000000600082015250565b7f5468652073656c6c6572206973206e6f206c6f6e67657220746865206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6135cb81612f2f565b81146135d657600080fd5b50565b6135e281612f41565b81146135ed57600080fd5b50565b6135f981612fa3565b811461360457600080fd5b5056fea2646970667358221220cc39a221ceb85f011e92cb8ce1ce37386b31559760ad611e4a203b25c09fe7e464736f6c63430008040033";

export class Marketplace__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Marketplace> {
    return super.deploy(overrides || {}) as Promise<Marketplace>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Marketplace {
    return super.attach(address) as Marketplace;
  }
  connect(signer: Signer): Marketplace__factory {
    return super.connect(signer) as Marketplace__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceInterface {
    return new utils.Interface(_abi) as MarketplaceInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Marketplace {
    return new Contract(address, _abi, signerOrProvider) as Marketplace;
  }
}
