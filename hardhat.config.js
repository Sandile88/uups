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
    etherscan: {
    apiKey: {
      arb: process.env.ARBISCAN_API_KEY
    },
    customChains: [
            {
                network: "arb",
                chainId: 421614,
                urls: {
                    apiURL: "https://api.etherscan.io/v2/api?chainid=421614",
                    browserURL: "https://sepolia.arbiscan.io/",
                },
            }
        ]
  },
  solidity: "0.8.28",
};
