async function main() {
  // Grab the contract factory
  const TopShotBalls = await ethers.getContractFactory("TopShotBalls");

  // Start deployment, returning a promise that resolves to a contract object
  const topShotBalls = await TopShotBalls.deploy(); // Instance of the contract
  console.log("Contract deployed to address:", topShotBalls.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
