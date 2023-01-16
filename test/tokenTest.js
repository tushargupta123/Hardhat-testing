const {expect} = require("chai");

describe("Token contract",function(){

    beforeEach(async function(){            // runs before every it block
        console.log("before each");
    })

    it("deployment should assign the total supply of tokens to the owner", async function(){
        const [owner] = await ethers.getSigners();
        
        const Token = ethers.getContractFactory("Token");
        const hardhatToken = await Token.deploy();
        const ownerBalance = await hardhatToken.balanceOf(owner.address);

        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });

    it("should trasnfer token between accounts",async function(){
        const [owner,addr1, addr2] = await ethers.getSigners();
        const Token = ethers.getContractFactory("Token");
        const hardhatToken = await Token.deploy();
        await hardhatToken.transfer(addr1.address,10);      // hardhat automatically detects that from owner these tokens has to be transfer
        expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10);
        await hardhatToken.connect(addr1).transfer(addr2.address,10);   // here we have to tell that from where these tokens have to get.
        expect(await hardhatToken.balanceOf(addr2.address)).to.equal(10);
    });
})