import { expect } from "chai";
import { ethers } from "hardhat";
import { ZeroAddress } from "ethers";

import { deployJerk, deployWallet } from "@gemunion/contracts-mocks";

import type { IERC721EnumOptions } from "../shared/defaultMint";
import { defaultMintERC721 } from "../shared/defaultMint";

export function shouldSafeTransferFrom(factory: () => Promise<any>, options: IERC721EnumOptions = {}) {
  const { mint = defaultMintERC721, tokenId: defaultTokenId = 0n } = options;

  describe("safeTransferFrom", function () {
    it("should transfer own tokens to EOA", async function () {
      const [owner, _receiver, stranger] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);
      const tx = contractInstance.safeTransferFrom(owner, stranger, defaultTokenId);

      await expect(tx).to.emit(contractInstance, "Transfer").withArgs(owner.address, stranger.address, defaultTokenId);

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(0);

      const balanceOfReceiver = await contractInstance.balanceOf(stranger);
      expect(balanceOfReceiver).to.equal(1);
    });

    it("should transfer approved tokens to EOA", async function () {
      const [owner, receiver, stranger] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);
      await contractInstance.approve(receiver, defaultTokenId);

      const tx = contractInstance.connect(receiver).safeTransferFrom(owner, stranger, defaultTokenId);

      await expect(tx).to.emit(contractInstance, "Transfer").withArgs(owner.address, stranger.address, defaultTokenId);

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(0);

      const balanceOfReceiver = await contractInstance.balanceOf(stranger);
      expect(balanceOfReceiver).to.equal(1);
    });

    it("should transfer own tokens to receiver contract", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      const erc721ReceiverInstance = await deployWallet();

      await mint(contractInstance, owner, owner);
      const tx = contractInstance.safeTransferFrom(owner, erc721ReceiverInstance, defaultTokenId);

      await expect(tx)
        .to.emit(contractInstance, "Transfer")
        .withArgs(owner.address, await erc721ReceiverInstance.getAddress(), defaultTokenId);

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(0);

      const balanceOfReceiver = await contractInstance.balanceOf(erc721ReceiverInstance);
      expect(balanceOfReceiver).to.equal(1);
    });

    it("should transfer approved tokens to receiver contract", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      const erc721ReceiverInstance = await deployWallet();

      await mint(contractInstance, owner, owner);
      await contractInstance.approve(receiver, defaultTokenId);

      const tx = contractInstance.connect(receiver).safeTransferFrom(owner, erc721ReceiverInstance, defaultTokenId);

      await expect(tx)
        .to.emit(contractInstance, "Transfer")
        .withArgs(owner.address, await erc721ReceiverInstance.getAddress(), defaultTokenId);

      const balanceOfOwner = await contractInstance.balanceOf(owner);
      expect(balanceOfOwner).to.equal(0);

      const balanceOfReceiver = await contractInstance.balanceOf(erc721ReceiverInstance);
      expect(balanceOfReceiver).to.equal(1);
    });

    it("should fail: ERC721InsufficientApproval", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);
      const tx = contractInstance.connect(receiver).safeTransferFrom(owner, receiver, defaultTokenId);

      await expect(tx)
        .to.be.revertedWithCustomError(contractInstance, "ERC721InsufficientApproval")
        .withArgs(receiver.address, defaultTokenId);
    });

    it("should fail: ERC721InvalidReceiver (NonReceiver)", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();
      const erc721NonReceiverInstance = await deployJerk();

      await mint(contractInstance, owner, owner);
      const tx = contractInstance.safeTransferFrom(owner, erc721NonReceiverInstance, defaultTokenId);
      await expect(tx)
        .to.be.revertedWithCustomError(contractInstance, "ERC721InvalidReceiver")
        .withArgs(await erc721NonReceiverInstance.getAddress());
    });

    it("should fail: ERC721InvalidReceiver (ZeroAddress)", async function () {
      const [owner] = await ethers.getSigners();
      const contractInstance = await factory();

      await mint(contractInstance, owner, owner);
      const tx = contractInstance.safeTransferFrom(owner, ZeroAddress, defaultTokenId);
      await expect(tx).to.be.revertedWithCustomError(contractInstance, "ERC721InvalidReceiver").withArgs(ZeroAddress);
    });
  });
}
