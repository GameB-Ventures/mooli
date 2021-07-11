const { expect } = require("chai");
//const { ethers } = require("ethers");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Basic = await ethers.getContractFactory("Basic");
    const b = await Basic.deploy();
    await b.deployed();

    const [owner, addr1] = await ethers.getSigners();
    //console.log({owner, addr1})
    //console.log(await b.owner())

    // is owner set correctly? (dummy test)
    expect(await b.owner()).to.equal(owner.address);

    /*


    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");*/
  });
});