import { TxData, TxDataPayable } from "ethereum-types";
import { ethers } from "ethers";
export declare class BaseContract {
    protected ethersContractInstance: ethers.Contract;
    protected defaults: Partial<TxData>;
    protected applyDefaultsToTxDataAsync<T extends TxData | TxDataPayable>(txData: Partial<T>, estimateGasAsync?: (txData: Partial<T>) => Promise<number>): Promise<Partial<TxData>>;
    constructor(ethersContractInstance: ethers.Contract, defaults: Partial<TxData>);
    protected convertEthersInputs(...args: any[]): any[];
    protected convertEthersOutputs(arr: any[]): any;
}
