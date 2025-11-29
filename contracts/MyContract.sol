// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";


contract MyContract is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    uint256 public value;
    

    function initialize(uint256 initialValue) public initializer {
        // had to call the parent contract initializers cause i was getting this error:
        /*npx hardhat run scripts/deploy.js 
        WARNING: You are currently using Node.js v18.20.8, which is not supported by Hardhat. This can lead to unexpected behavior. See https://v2.hardhat.org/nodejs-versions

        Error: Contract `contracts/MyContract.sol:MyContract` is not upgrade safe

        contracts/MyContract.sol:14: Missing initializer calls for one or more parent contracts: `OwnableUpgradeable`
        Call the parent initializers in your initializer function
        https://zpl.in/upgrades/error-001
            */

        __Ownable_init(msg.sender);
        __UUPSUpgradeable_init();
        value = initialValue;
    }

    function setValue(uint256 newValue) public onlyOwner {
        value = newValue;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}