pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/N1CEToken.sol";

contract TestN1CEToken {
  function testInitialBalanceWithNewMetaCoin() public {
    N1CEToken meta = new N1CEToken();

    uint expected = 100000000 * 10 ** 18;

    Assert.equal(meta.balanceOf(0xEcFcaB0A285d3380E488A39B4BB21e777f8A4EaC), expected, "Owner should have 100000000 N1CEToken initially");
  }
}