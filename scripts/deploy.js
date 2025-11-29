const { ethers, upgrades } = require("hardhat");

async function main() {
    const MyContract = await ethers.getContractFactory("MyContract");
    // const myContract = await MyContract.deploy();

    const myContract = await upgrades.deployProxy(MyContract, [42], {
        initializer: "initialize",
    }); //initializing here right (was dpeloying a regualr contract not proxy)
    await myContract.waitForDeployment();

    console.log("MyContract deployed to:", await myContract.getAddress());

    console.log("Contract initialized with value:", 42);

    // some debu stmts
    console.log("Proxy:", await myContract.getAddress());
    console.log("Implementation:", await upgrades.erc1967.getImplementationAddress(await myContract.getAddress()));
    // console.log("Admin:", await upgrades.erc1967.getAdminAddress(await myContract.getAddress()));

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });