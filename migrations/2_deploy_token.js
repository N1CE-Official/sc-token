const N1CEToken = artifacts.require("./N1CEToken.sol");

module.exports = function (deployer) {
  deployer.deploy(N1CEToken);
};
