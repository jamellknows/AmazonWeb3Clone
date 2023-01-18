const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Jamazon", () => {

  let jamazon;

  beforeEach(async() => {

    // setup accounts 
    console.log(await ethers.getSigners())
   
    const Jamazon = await ethers.getContractFactory("Jamazon");
    jamazon = await Jamazon.deploy()
  })

describe("Deployment", ()=>{
  console.log(ethers.getSigners())
  it('has a name', async () => {

    const name = await jamazon.name()
    expect(name).to.equal('Jamazon');
    })
  })
 
})
