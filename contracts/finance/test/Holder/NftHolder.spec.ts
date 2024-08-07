import { expect } from "chai";
import { ethers } from "hardhat";
import { ZeroAddress } from "ethers";

import { deployContract, shouldSupportsInterface } from "@gemunion/contracts-utils";
import { InterfaceId, tokenId } from "@gemunion/contracts-constants";
import { deployERC20Mock } from "@gemunion/contracts-mocks";

describe("NftHolder", function () {
  const factory = () => deployContract(this.title);

  it("accept ERC721 token", async function () {
    const [owner] = await ethers.getSigners();
    const contractInstance = await factory();

    const erc20Instance = await deployERC20Mock("ERC721Mock");

    const tx1 = await erc20Instance.mint(owner, tokenId);
    await expect(tx1).to.emit(erc20Instance, "Transfer").withArgs(ZeroAddress, owner, tokenId);

    const tx3 = erc20Instance.transferFrom(owner, contractInstance, tokenId);
    await expect(tx3).to.emit(erc20Instance, "Transfer").withArgs(owner, contractInstance, tokenId);
  });

  shouldSupportsInterface(factory)([InterfaceId.IERC165, InterfaceId.IERC721Receiver]);
});
