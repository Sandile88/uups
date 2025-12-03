const { ethers, upgrades } = require("hardhat");

async function main() {
    const MyContract = await ethers.getContractFactory("MyContract");

    const myContract = await upgrades.deployProxy(MyContract, [42], {
        initializer: "initialize",
        kind: "uups"
    });
    await myContract.waitForDeployment();

    console.log("MyContract deployed to:", await myContract.getAddress());

    console.log("Contract initialized with value:", 42);

    // some debug stmts
    console.log("Proxy:", await myContract.getAddress());
    console.log("Implementation:", await upgrades.erc1967.getImplementationAddress(await myContract.getAddress()));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });