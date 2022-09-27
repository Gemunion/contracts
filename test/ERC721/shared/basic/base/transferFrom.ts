import { expect } from "chai";
import { ethers } from "hardhat";
import { tokenId } from "../../../../constants";
import { deployErc721Base } from "../../fixtures";

export function shouldTransferFrom(name: string) {
  describe("transferFrom", function () {
    it("should fail: not an owner", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const { contractInstance } = await deployErc721Base(name);

      await contractInstance.mint(owner.address, tokenId);
      const tx = contractInstance.connect(receiver).transferFrom(owner.address, receiver.address, tokenId);

      await expect(tx).to.be.revertedWith(`ERC721: caller is not token owner nor approved`);
    });

    it("should fail: zero addr", async function () {
      const [owner] = await ethers.getSigners();
      const { contractInstance } = await deployErc721Base(name);

      await contractInstance.mint(owner.address, tokenId);
      const tx = contractInstance.transferFrom(owner.address, ethers.constants.AddressZero, tokenId);

      await expect(tx).to.be.revertedWith(`ERC721: transfer to the zero address`);
    });

    it("should transfer own tokens to wallet", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const { contractInstance } = await deployErc721Base(name);

      await contractInstance.mint(owner.address, tokenId);
      const tx = contractInstance.transferFrom(owner.address, receiver.address, tokenId);

      await expect(tx).to.emit(contractInstance, "Transfer").withArgs(owner.address, receiver.address, tokenId);

      const balanceOfOwner = await contractInstance.balanceOf(owner.address);
      expect(balanceOfOwner).to.equal(0);

      const balanceOfReceiver = await contractInstance.balanceOf(receiver.address);
      expect(balanceOfReceiver).to.equal(1);
    });

    it("should transfer approved tokens to wallet", async function () {
      const [owner, receiver] = await ethers.getSigners();
      const { contractInstance } = await deployErc721Base(name);

      await contractInstance.mint(owner.address, tokenId);
      await contractInstance.approve(receiver.address, tokenId);

      const tx = contractInstance.connect(receiver).transferFrom(owner.address, receiver.address, tokenId);

      await expect(tx).to.emit(contractInstance, "Transfer").withArgs(owner.address, receiver.address, tokenId);

      const balanceOfOwner = await contractInstance.balanceOf(owner.address);
      expect(balanceOfOwner).to.equal(0);

      const balanceOfReceiver = await contractInstance.balanceOf(receiver.address);
      expect(balanceOfReceiver).to.equal(1);
    });
  });
}
