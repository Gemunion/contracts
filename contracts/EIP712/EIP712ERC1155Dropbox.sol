// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+gemunion@gmail.com
// Website: https://gemunion.io/

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";

import "../interfaces/IERC1155Mintable.sol";

contract EIP712ERC1155Dropbox is AccessControl, Pausable, EIP712 {
  using Address for address;

  IERC1155Mintable _factory;

  mapping(bytes32 => bool) private _expired;

  bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
  bytes32 private immutable PERMIT_SIGNATURE =
    keccak256("NFT(bytes32 nonce,address account,uint256[] tokenIds,uint256[] amounts)");

  constructor(string memory name) EIP712(name, "1.0.0") {
    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _setupRole(PAUSER_ROLE, _msgSender());
  }

  function redeem(
    bytes32 nonce,
    address account,
    uint256[] memory tokenIds,
    uint256[] memory amounts,
    address signer,
    bytes calldata signature
  ) external {
    require(_verify(signer, _hash(nonce, account, tokenIds, amounts), signature), "EIP712ERC1155Dropbox: Invalid signature");
    require(!_expired[nonce], "EIP712ERC1155Dropbox: Expired signature");
    _expired[nonce] = true;
    _factory.mintBatch(account, tokenIds, amounts, "0x");
  }

  function _hash(
    bytes32 nonce,
    address account,
    uint256[] memory tokenIds,
    uint256[] memory amounts
  ) internal view returns (bytes32) {
    return
      _hashTypedDataV4(
        keccak256(
          abi.encode(
            PERMIT_SIGNATURE,
            nonce,
            account,
            keccak256(abi.encodePacked(tokenIds)),
            keccak256(abi.encodePacked(amounts))
          )
        )
      );
  }

  function _verify(
    address signer,
    bytes32 digest,
    bytes memory signature
  ) internal view returns (bool) {
    return SignatureChecker.isValidSignatureNow(signer, digest, signature);
  }

  function setFactory(address factory) external onlyRole(DEFAULT_ADMIN_ROLE) {
    require(factory.isContract(), "EIP712ERC1155Dropbox: the factory must be a deployed contract");
    _factory = IERC1155Mintable(factory);
  }

  function pause() public virtual onlyRole(PAUSER_ROLE) {
    _pause();
  }

  function unpause() public virtual onlyRole(PAUSER_ROLE) {
    _unpause();
  }

  receive() external payable {
    revert();
  }
}
