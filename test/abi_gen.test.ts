import { assert, expect } from "chai";
import { describe, it } from "mocha";
import { BigNumber as ethersBN, ethers } from "ethers";
import { constants } from "../src/utils/constants";
import { WyvernExchangeContract } from "../lib/abi_gen/wyvern_exchange";
import { WyvernDAOContract } from "../lib/abi_gen/wyvern_d_a_o";
import { BigNumber } from "@0x/utils";

const { INFURA_API_KEY } = process.env;
if (!INFURA_API_KEY) {
  throw new Error("Need to set INFURA_API_KEY");
}

const WYVERN_EXCHANGE_ADDRESS_MAINNET =
  "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b";
const WYVERN_DAO_ADDRESS_MAINNET = "0x17f68886d00845867c154c912b4ccc506ec92fc7";

// const rpcUrl = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;
const provider = new ethers.providers.InfuraProvider(
  "homestead",
  INFURA_API_KEY
);

const WyvernExchangeContractInstance = new ethers.Contract(
  WYVERN_EXCHANGE_ADDRESS_MAINNET,
  constants.EXCHANGE_ABI,
  provider
);
const WyvernDAOContractInstance = new ethers.Contract(
  WYVERN_DAO_ADDRESS_MAINNET,
  constants.DAO_ABI,
  provider
);

const wyvernExchange = new WyvernExchangeContract(
  WyvernExchangeContractInstance,
  {}
);
const wyvernDao = new WyvernDAOContract(WyvernDAOContractInstance, {});

describe("abi_gen", () => {
  it("Should 'Call' successfully (with 1 output)", async () => {
    const result = await wyvernExchange.name.callAsync();
    expect(result).to.eq("Project Wyvern Exchange");
  });

  it("Should 'Call' successfully (with multiple outputs)", async () => {
    const result = await wyvernDao.proposals.callAsync(new BigNumber(0));
    console.log(result);
  });
});
