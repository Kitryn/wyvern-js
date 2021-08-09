import { TxData } from "ethereum-types";
import { BigNumber } from "@0x/utils";
import { ethers } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { BaseContract } from "./base_contract";
export declare class WyvernTokenContract extends BaseContract {
    MULTIPLIER: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    name: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    maximumRedeemable: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    approve: {
        sendTransactionAsync(_spender_0: string, _value_1: BigNumber, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(_spender_0: string, _value_1: BigNumber): string;
    };
    totalSupply: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    multiplier: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    transferFrom: {
        sendTransactionAsync(_from_0: string, _to_1: string, _value_2: BigNumber, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(_from_0: string, _to_1: string, _value_2: BigNumber): string;
    };
    decimals: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    burn: {
        sendTransactionAsync(_value_0: BigNumber, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(_value_0: BigNumber): string;
    };
    pubKeyToEthereumAddress: {
        callAsync(pubKey_0: string, txData?: Partial<TxData>): Promise<string>;
    };
    MINT_AMOUNT: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    decreaseApproval: {
        sendTransactionAsync(_spender_0: string, _subtractedValue_1: BigNumber, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(_spender_0: string, _subtractedValue_1: BigNumber): string;
    };
    balanceOf: {
        callAsync(_owner_0: string, txData?: Partial<TxData>): Promise<BigNumber>;
    };
    redeemUTXO: {
        sendTransactionAsync(txid_0: string, outputIndex_1: number | BigNumber, satoshis_2: BigNumber, proof_3: string[], pubKey_4: string, isCompressed_5: boolean, v_6: number | BigNumber, r_7: string, s_8: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(txid_0: string, outputIndex_1: number | BigNumber, satoshis_2: BigNumber, proof_3: string[], pubKey_4: string, isCompressed_5: boolean, v_6: number | BigNumber, r_7: string, s_8: string): string;
    };
    canRedeemUTXOHash: {
        callAsync(merkleLeafHash_0: string, proof_1: string[], txData?: Partial<TxData>): Promise<boolean>;
    };
    releaseTokens: {
        sendTransactionAsync(destination_0: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(destination_0: string): string;
    };
    symbol: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    transfer: {
        sendTransactionAsync(_to_0: string, _value_1: BigNumber, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(_to_0: string, _value_1: BigNumber): string;
    };
    validateSignature: {
        callAsync(hash_0: string, v_1: number | BigNumber, r_2: string, s_3: string, expected_4: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    verifyProof: {
        callAsync(proof_0: string[], merkleLeafHash_1: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    canRedeemUTXO: {
        callAsync(txid_0: string, originalAddress_1: string, outputIndex_2: number | BigNumber, satoshis_3: BigNumber, proof_4: string[], txData?: Partial<TxData>): Promise<boolean>;
    };
    ecdsaVerify: {
        callAsync(addr_0: string, pubKey_1: string, v_2: number | BigNumber, r_3: string, s_4: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    increaseApproval: {
        sendTransactionAsync(_spender_0: string, _addedValue_1: BigNumber, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(_spender_0: string, _addedValue_1: BigNumber): string;
    };
    allowance: {
        callAsync(_owner_0: string, _spender_1: string, txData?: Partial<TxData>): Promise<BigNumber>;
    };
    pubKeyToBitcoinAddress: {
        callAsync(pubKey_0: string, isCompressed_1: boolean, txData?: Partial<TxData>): Promise<string>;
    };
    rootUTXOMerkleTreeHash: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    totalRedeemed: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    SATS_TO_TOKENS: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    constructor(ethersContractInstance: ethers.Contract, defaults: Partial<TxData>);
}
