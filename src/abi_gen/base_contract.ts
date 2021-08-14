import { TxData, TxDataPayable } from "ethereum-types";
import { ethers, BigNumber as ethersBN } from "ethers";
import { utils } from "../utils/utils";
import { BigNumber } from "@0x/utils";
import * as _ from "lodash";

export class BaseContract {
  protected ethersContractInstance: ethers.Contract;
  protected defaults: Partial<TxData>;

  protected async applyDefaultsToTxDataAsync<T extends TxData | TxDataPayable>(
    txData: Partial<T>,
    estimateGasAsync?: (txData: Partial<T>) => Promise<number>
  ): Promise<Partial<TxData>> {
    // Gas amount sourced with the following priorities:
    // 1. Optional param passed in to public method call
    // 2. Global config passed in at library instantiation
    // 3. Gas estimate calculation + safety margin
    const removeUndefinedProperties = _.pickBy;
    const txDataWithDefaults = {
      ...removeUndefinedProperties(this.defaults),
      ...removeUndefinedProperties(txData as any),
      // HACK: TS can't prove that T is spreadable.
      // Awaiting https://github.com/Microsoft/TypeScript/pull/13288 to be merged
    };
    if (
      _.isUndefined(txDataWithDefaults.gas) &&
      !_.isUndefined(estimateGasAsync)
    ) {
      const estimatedGas = await estimateGasAsync(txData);
      txDataWithDefaults.gas = estimatedGas;
    }
    return txDataWithDefaults;
  }
  constructor(
    ethersContractInstance: ethers.Contract,
    defaults: Partial<TxData>
  ) {
    this.ethersContractInstance = ethersContractInstance;
    this.defaults = defaults;
  }
  protected convertEthersInputs(...args: any[]) {
    for (let i = 0; i < args.length; i++) {
      // types to look for: BigNumber, BigNumber[]
      if (Array.isArray(args[i]) && BigNumber.isBigNumber(args[i][0])) {
        args[i] = args[i].map((val: BigNumber) => utils.toEthersBN(val));
      } else if (BigNumber.isBigNumber(args[i])) {
        args[i] = utils.toEthersBN(args[i]);
      }
    }

    return args;
  }
  protected convertEthersOutputs(arr: any[]) {
    const output: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && ethers.BigNumber.isBigNumber(arr[i][0])) {
        output[i] = arr[i].map((val: ethersBN) => utils.toBigNumberJS(val));
      } else if (ethers.BigNumber.isBigNumber(arr[i])) {
        output[i] = utils.toBigNumberJS(arr[i]);
      } else {
        output[i] = arr[i];
      }
    }
    // To keep previous behaviour
    if (arr.length === 1) {
      return output[0];
    } else {
      return output;
    }
  }
}
