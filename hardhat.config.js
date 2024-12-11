require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
const privateKey = fs.readFileSync("secret.txt").toString();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {
      chainId: 4202,
    },
    RootstockTestnet: {
      url: "https://public-node.testnet.rsk.co",
      accounts: [privateKey],
      gasPrice: 100000000,
      chainId: 31,
    },
  },
  solidity: "0.8.24",
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true,
};
