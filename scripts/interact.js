async function main() {
    const myContractAddress = "0x10eFC9A1BEF5e1f45fb2A764ed6C15b2B94568aa"; // replace with your deployed contract address
    const myContract = await ethers.getContractAt("MyContractV2", myContractAddress); //changed instance contract as it was pointing to the wrong one.

    // Call incrementValue
    const tx = await myContract.incrementValue();
    await tx.wait();

    const newValue = await myContract.value();
    console.log("New value after increment:", newValue.toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });