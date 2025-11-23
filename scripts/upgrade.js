async function main() {
    const myContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // replace with your deployed contract address
    const MyContractV2 = await ethers.getContractFactory("MyContractV2");
    const myContractV2 = await MyContractV2.deploy();

    await myContractV2.waitForDeployment();
    console.log("MyContractV2 deployed to:", myContractV2.address);

    const myContract = await ethers.getContractAt("MyContract", myContractAddress);
    const tx = await myContract.upgradeTo(myContractV2.address);
    await tx.wait();

    console.log("Upgraded to MyContractV2");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });