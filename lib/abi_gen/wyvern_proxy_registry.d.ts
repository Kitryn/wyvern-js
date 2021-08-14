import { TxData } from "ethereum-types";
import { BigNumber } from "@0x/utils";
import { ethers } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { BaseContract } from "./base_contract";
export declare class WyvernProxyRegistryContract extends BaseContract {
    name: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    initialAddressSet: {
        callAsync(txData?: Partial<TxData>): Promise<boolean>;
    };
    endGrantAuthentication: {
        sendTransactionAsync(addr_0: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(addr_0: string, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(addr_0: string): string;
    };
    revokeAuthentication: {
        sendTransactionAsync(addr_0: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(addr_0: string, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(addr_0: string): string;
    };
    pending: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<BigNumber>;
    };
    contracts: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    owner: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    delegateProxyImplementation: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    proxies: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<string>;
    };
    startGrantAuthentication: {
        sendTransactionAsync(addr_0: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(addr_0: string, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(addr_0: string): string;
    };
    registerProxy: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    DELAY_PERIOD: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner_0: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(newOwner_0: string, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(newOwner_0: string): string;
    };
    grantInitialAuthentication: {
        sendTransactionAsync(authAddress_0: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(authAddress_0: string, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(authAddress_0: string): string;
    };
    constructor(ethersContractInstance: ethers.Contract, defaults: Partial<TxData>);
}
