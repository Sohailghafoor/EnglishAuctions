

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */


module.exports = {
defaultNetwork: "goerli",
networks: {
hardhat: {
},
goerli: {
url: "https://eth-goerli.alchemyapi.io/v2/ETsRy2thV6AIetveYwbdQKkdbLcpl3ox",
accounts: ["e6471b44975f63f53a1cd6b6d1ceeb2657139c9a1395091f4474017c6b4f71c7"]
}
},
etherscan: {
// Your API key for Etherscan
// Obtain one at https://etherscan.io/
apiKey: "XX23JGAXJHEMGEKM8QMZF8WD8GTBI3E686"
},
solidity: "0.8.4",
};