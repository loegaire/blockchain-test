const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ZombieModule", (m) => {
  const zombie = m.contract("ZombieFactory");
  return { zombie };
});
