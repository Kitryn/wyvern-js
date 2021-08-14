import { TxData } from "ethereum-types";
import { BigNumber } from "@0x/utils";
import { ethers } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { BaseContract } from "./base_contract";
export declare class WyvernAtomicizerContract extends BaseContract {
    atomicize: {
        sendTransactionAsync(addrs_0: string[], values_1: BigNumber[], calldataLengths_2: BigNumber[], calldatas_3: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(addrs_0: string[], values_1: BigNumber[], calldataLengths_2: BigNumber[], calldatas_3: string, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(addrs_0: string[], values_1: BigNumber[], calldataLengths_2: BigNumber[], calldatas_3: string): string;
    };
    constructor(ethersContractInstance: ethers.Contract, defaults: Partial<TxData>);
}
