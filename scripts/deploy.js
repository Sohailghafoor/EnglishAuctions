
const hre = require("hardhat");
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Stake = await ethers.getContractFactory("Auction"); // name of the artifect when we compile our contract
  const stake = await Stake.deploy();
  console.log("Token address:", stake.address );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });