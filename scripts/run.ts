async function main() {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to: ", nftContract.address);

  let txn = await nftContract.makeAnEpicNFT();
  await txn.wait();
  console.log("minted test nft #1");

  txn = await nftContract.makeAnEpicNFT();
  await txn.wait();
  console.log("minted test nft #2");
};

async function runMain() {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
