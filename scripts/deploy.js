async function main() {
  const MyNFT= await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy();
  console.log("contract deployed to address",myNFT.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
//0x2549a2FE647B946fC0294fFa9CEC04609BdFb1b5
//0x2549a2fe647b946fc0294ffa9cec04609bdfb1b5 to:
//const contractAddress="0x2549a2FE647B946fC0294fFa9CEC04609BdFb1b5"