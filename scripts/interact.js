async function main() {
    const myContractAddress = "0xc26Ce203210eaC25243ef09063b335d85c601437"; // replace with your deployed contract address
    const myContract = await ethers.getContractAt("MyContractV5", myContractAddress); //changed instance contract as it was pointing to the wrong one.

    // Call incrementValue
    const tx = await myContract.incrementValue();
    await tx.wait();

    const newValue = await myContract.value();
    console.log("New value after increment:", newValue.toString());

    
    // Call incrementValue
    const tx1 = await myContract.incrementValues();
    await tx1.wait();

    const newValue1 = await myContract.values();
    console.log("New value after increment:", newValue1.toString());
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });