// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyContractV2.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";


contract MyContractV3 is MyContractV2 {
    function _authorizeUpgrade(address newImplementation) internal override virtual onlyOwner {}
    
    function incrementValue1() public {
        value += 1;
    }


}