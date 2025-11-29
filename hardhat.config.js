require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    arb: {
      url: process.env.RPC_URL, 
      accounts: [process.env.PRIVATE_KEY], 
    }},
  solidity: "0.8.28",
};
