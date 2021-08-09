import { TxData, TxDataPayable } from "ethereum-types";
import { ethers } from "ethers";
import * as _ from "lodash";

export class BaseContract {
    protected ethersContractInstance: ethers.Contract;
    protected defaults: Partial<TxData>;

    protected async applyDefaultsToTxDataAsync<
        T extends TxData | TxDataPayable
    >(
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
}
