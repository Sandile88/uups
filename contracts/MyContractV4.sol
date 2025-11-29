// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyContractV3.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";


contract MyContractV4 is MyContractV3 {
    uint256 public values;

    function _authorizeUpgrade(address newImplementation) internal override virtual onlyOwner {}
    
    function incrementValue2() public {
        values += 5;
    }


}