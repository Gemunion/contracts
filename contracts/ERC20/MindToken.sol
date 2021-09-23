// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/presets/ERC20PresetMinterPauserUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20SnapshotUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20CappedUpgradeable.sol";

contract MindCoin is Initializable, ERC20PresetMinterPauserUpgradeable, ERC20CappedUpgradeable, ERC20SnapshotUpgradeable {
    bytes32 public constant SNAPSHOT_ROLE = keccak256("SNAPSHOT_ROLE");

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize(string memory name, string memory symbol, uint256 initialSupply, uint256 cap) public virtual initializer  {
        require(cap >= initialSupply, "MindCoin: pre minted amount is greater than token cap");

        __ERC20PresetMinterPauser_init(name, symbol);

        __ERC20Capped_init_unchained(cap);
        __ERC20Snapshot_init_unchained();

        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(SNAPSHOT_ROLE, _msgSender());
        _setupRole(PAUSER_ROLE, _msgSender());
        _setupRole(MINTER_ROLE, _msgSender());

        _mint(_msgSender(), initialSupply);
 }

    function snapshot() public onlyRole(SNAPSHOT_ROLE) {
        _snapshot();
    }

    function _mint(address account, uint256 amount) internal virtual override(ERC20Upgradeable, ERC20CappedUpgradeable) {
        super._mint(account, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override(ERC20Upgradeable, ERC20SnapshotUpgradeable, ERC20PresetMinterPauserUpgradeable)
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}