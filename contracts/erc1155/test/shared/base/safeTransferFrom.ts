import { expect } from "chai";
import { ethers } from "hardhat";

import { amount, tokenId } from "../../constants";
import { deployErc1155Base, deployErc1155NonReceiver, deployErc1155Receiver } from "../fixtures";

export function shouldSafeTransferFrom(name: string) {
  describe("safeTransferFrom", function () {
    it("should fail: not an owner", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const { contractInstance: erc1155Instance } = await deployErc1155Base(name);
      await erc1155Instance.connect(owner).mint(owner.address, tokenId, amount, "0x");
      const tx = erc1155Instance
        .connect(receiver)
        .safeTransferFrom(owner.address, receiver.address, tokenId, amount, "0x");
      await expect(tx).to.be.revertedWith(`ERC1155: caller is not token owner nor approved`);
    });

    it("should transfer own tokens to receiver contract", async function () {
      const [owner] = await ethers.getSigners();
      const { contractInstance } = await deployErc1155Base(name);
      const { contractInstance: erc1155ReceiverInstance } = await deployErc1155Receiver();
      await contractInstance.connect(owner).mint(owner.address, tokenId, amount, "0x");
      const tx = contractInstance
        .connect(owner)
        .safeTransferFrom(owner.address, erc1155ReceiverInstance.address, tokenId, amount, "0x");
      await expect(tx)
        .to.emit(contractInstance, "TransferSingle")
        .withArgs(owner.address, owner.address, erc1155ReceiverInstance.address, tokenId, amount);

      const balanceOfOwner = await contractInstance.balanceOf(owner.address, tokenId);
      expect(balanceOfOwner).to.equal(0);

      const balanceOfReceiver = await contractInstance.balanceOf(erc1155ReceiverInstance.address, tokenId);
      expect(balanceOfReceiver).to.equal(amount);
    });

    it("should fail: transfer to non ERC1155Receiver implementer", async function () {
      const [owner] = await ethers.getSigners();
      const { contractInstance } = await deployErc1155Base(name);
      const { contractInstance: erc1155NonReceiverInstance } = await deployErc1155NonReceiver();

      await contractInstance.mint(owner.address, tokenId, amount, "0x");
      const tx = contractInstance.safeTransferFrom(
        owner.address,
        erc1155NonReceiverInstance.address,
        tokenId,
        amount,
        "0x",
      );
      await expect(tx).to.be.revertedWith(`ERC1155: transfer to non ERC1155Receiver implementer`);
    });

    it("should transfer approved tokens to receiver contract", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const { contractInstance: erc1155Instance } = await deployErc1155Base(name);
      const { contractInstance: erc1155ReceiverInstance } = await deployErc1155Receiver();

      await erc1155Instance.mint(owner.address, tokenId, amount, "0x");
      await erc1155Instance.setApprovalForAll(receiver.address, true);
      const checkApprove = await erc1155Instance.isApprovedForAll(owner.address, receiver.address);
      expect(checkApprove).to.equal(true);
      await erc1155Instance.setApprovalForAll(receiver.address, true);

      const tx = erc1155Instance
        .connect(receiver)
        .safeTransferFrom(owner.address, erc1155ReceiverInstance.address, tokenId, amount, "0x");
      await expect(tx)
        .to.emit(erc1155Instance, "TransferSingle")
        .withArgs(receiver.address, owner.address, erc1155ReceiverInstance.address, tokenId, amount);

      const balanceOfOwner = await erc1155Instance.balanceOf(owner.address, tokenId);
      expect(balanceOfOwner).to.equal(0);

      const balanceOfReceiver = await erc1155Instance.balanceOf(erc1155ReceiverInstance.address, tokenId);
      expect(balanceOfReceiver).to.equal(amount);
    });
  });
}