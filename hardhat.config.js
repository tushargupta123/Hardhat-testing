require("@nomicfoundation/hardhat-toolbox");
const GOERLI_PRIVATE_KEY = "00c3d308054821ef8f5927556958ea5065db84442e0213a38ce39c7c5fc87452";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/9634349f80f444ccb9af995605339d8f`,
      accounts: [`${GOERLI_PRIVATE_KEY}`]
    }
  }
};
