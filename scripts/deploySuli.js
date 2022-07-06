
const hre = require("hardhat");

async function main() {
 

  // We get the contract to deploy
  const Suli = await hre.ethers.getContractFactory("Suli");
  const suli = await Suli.deploy();

  await suli.deployed();

  console.log("Suli deployed to:", suli.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
