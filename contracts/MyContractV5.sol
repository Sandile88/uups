// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";


contract MyContractV5 is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    uint256 public value;
    uint256 public values;

    

    function initialize(uint256 initialValue) public initializer {
        __Ownable_init(msg.sender);
        __UUPSUpgradeable_init();
        value = initialValue;
    }

    function setValue(uint256 newValue) public onlyOwner {
        value = newValue;
    }

    function _authorizeUpgrade(address newImplementation) internal override {
        revert("No further upgrades allowed");
    }

    function incrementValue() public {
        value += 5;
    }

    function incrementValues() public {
        values += 5;
    }
}
