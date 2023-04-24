// import {PANIC_CODES} from "@nomicfoundation/hardhat-chai-matchers"}
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect , assert } from "chai";
import { ethers } from "hardhat";


describe("MyEpicNFT contract",function() {

  it("test #1",async function(){
    const [owner] = await ethers.getSigners();
    const contractFactory = await ethers.getContractFactory("MyEpicNFT");
    const contract = await contractFactory.deploy();
    await contract.deployed();

    let txn = await contract.makeAnEpicNFT()
    await txn.wait()

    expect(await contract.tokenURI(0)).to.equal("https://jsonkeeper.com/b/9HK2") ;
  })

  it("makeAnEpicNFT function",async function() {
	  
  })

  it("random function",async function() {
	  
  })

  it("pickRandomThirdWord function",async function() {
  
  })

  it("pickRandomSecondWord function",async function() {
	  
  })

  it("pickRandomFirstWord function",async function() {
	  
  })

});
