// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";

contract Dex is PausableUpgradeable, OwnableUpgradeable {
    using SafeERC20Upgradeable for IERC20Upgradeable;
    using AddressUpgradeable for address;

    event Bought(uint256 amount);
    event Sold(uint256 amount);
    event Received(uint amount);

    IERC20Upgradeable public acceptedToken;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize(
        address _acceptedToken
    ) initializer public {
        __Pausable_init();
        __Ownable_init();

        require(_acceptedToken.isContract(), "The accepted token address must be a deployed contract");
        acceptedToken = IERC20Upgradeable(_acceptedToken);
    }

    function buy() payable whenNotPaused public {
        require(msg.value > 0, "You need to send some ether");
        uint256 amountOfToken = msg.value;
        uint256 dexBalance = acceptedToken.balanceOf(address(this));
        require(amountOfToken <= dexBalance, "Not enough tokens in the reserve");
        acceptedToken.transfer(msg.sender, amountOfToken);
        emit Bought(amountOfToken);
    }

    function sell(uint256 amountOfToken) whenNotPaused public {
        require(amountOfToken > 0, "You need to sell at least some tokens");
        uint256 allowance = acceptedToken.allowance(msg.sender, address(this));
        require(allowance >= amountOfToken, "Check the token allowance");
        uint256 amountOfWei = amountOfToken;
        acceptedToken.transferFrom(msg.sender, address(this), amountOfToken);
        payable(msg.sender).transfer(amountOfWei);
        emit Sold(amountOfToken);
    }

    receive() external payable {
        emit Received(msg.value);
    }

    function withdraw() public onlyOwner {
        uint256 amount = address(this).balance;
        require(amount > 0, "Owner has no balance to withdraw");
        payable(msg.sender).transfer(amount);
    }

}