async function main() {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();
    await myContract.waitForDeployment();

    console.log("MyContract deployed to:", myContract.target);

    // Initialize the contract
    const tx = await myContract.initialize(42);
    await tx.wait();

    console.log("Contract initialized with value:", 42);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });