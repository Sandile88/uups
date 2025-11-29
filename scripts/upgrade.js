const { ethers, upgrades } = require("hardhat");

async function main() {
    const myContractAddress = "0x10eFC9A1BEF5e1f45fb2A764ed6C15b2B94568aa"; // replace with your deployed contract address
    const MyContractV2 = await ethers.getContractFactory("MyContractV2");
    const myContractV2 = await upgrades.upgradeProxy(myContractAddress, MyContractV2);

-
    await myContractV2.waitForDeployment();
    console.log("MyContractV2 deployed to:", await myContractV2.getAddress());


    console.log("Upgraded to MyContractV2");

    console.log("Proxy still at:", await myContractV2.getAddress());
    console.log("New implementation:", await upgrades.erc1967.getImplementationAddress(myContractAddress));

    console.log("Upgrade successful.");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });