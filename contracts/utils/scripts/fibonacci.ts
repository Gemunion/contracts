import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("Fibonacci");
  const instanse = await factory.deploy();

  const fib = await instanse.fibonacci(10); // 55
  return fib.toString();
}

main().then(console.info).catch(console.error);
