require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Nạp thư viện dotenv

// Lấy key từ file .env
const PRIVATE_KEY = process.env.BSC_TESTNET_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.28", // Phiên bản Solidity bạn đang dùng
  networks: {
    // Cấu hình mạng BSC Testnet
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545", // Đây là Provider URL của BSC Testnet
      chainId: 97,
      accounts: [PRIVATE_KEY], // Hardhat tự lấy key trong file .env nạp vào đây
    },
  },
};
