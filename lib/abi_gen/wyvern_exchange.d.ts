import { TxData, TxDataPayable } from "ethereum-types";
import { BigNumber } from "@0x/utils";
import { ethers } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { BaseContract } from "./base_contract";
export declare class WyvernExchangeContract extends BaseContract {
    name: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    tokenTransferProxy: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    staticCall: {
        callAsync(target_0: string, calldata_1: string, extradata_2: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    changeMinimumMakerProtocolFee: {
        sendTransactionAsync(newMinimumMakerProtocolFee_0: BigNumber, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(newMinimumMakerProtocolFee_0: BigNumber): string;
    };
    changeMinimumTakerProtocolFee: {
        sendTransactionAsync(newMinimumTakerProtocolFee_0: BigNumber, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(newMinimumTakerProtocolFee_0: BigNumber): string;
    };
    guardedArrayReplace: {
        callAsync(array_0: string, desired_1: string, mask_2: string, txData?: Partial<TxData>): Promise<string>;
    };
    minimumTakerProtocolFee: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    codename: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    testCopyAddress: {
        callAsync(addr_0: string, txData?: Partial<TxData>): Promise<string>;
    };
    testCopy: {
        callAsync(arrToCopy_0: string, txData?: Partial<TxData>): Promise<string>;
    };
    calculateCurrentPrice_: {
        callAsync(addrs_0: string[], uints_1: BigNumber[], feeMethod_2: number | BigNumber, side_3: number | BigNumber, saleKind_4: number | BigNumber, howToCall_5: number | BigNumber, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<BigNumber>;
    };
    changeProtocolFeeRecipient: {
        sendTransactionAsync(newProtocolFeeRecipient_0: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(newProtocolFeeRecipient_0: string): string;
    };
    version: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    orderCalldataCanMatch: {
        callAsync(buyCalldata_0: string, buyReplacementPattern_1: string, sellCalldata_2: string, sellReplacementPattern_3: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    validateOrder_: {
        callAsync(addrs_0: string[], uints_1: BigNumber[], feeMethod_2: number | BigNumber, side_3: number | BigNumber, saleKind_4: number | BigNumber, howToCall_5: number | BigNumber, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, v_9: number | BigNumber, r_10: string, s_11: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    calculateFinalPrice: {
        callAsync(side_0: number | BigNumber, saleKind_1: number | BigNumber, basePrice_2: BigNumber, extra_3: BigNumber, listingTime_4: BigNumber, expirationTime_5: BigNumber, txData?: Partial<TxData>): Promise<BigNumber>;
    };
    protocolFeeRecipient: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(): string;
    };
    hashOrder_: {
        callAsync(addrs_0: string[], uints_1: BigNumber[], feeMethod_2: number | BigNumber, side_3: number | BigNumber, saleKind_4: number | BigNumber, howToCall_5: number | BigNumber, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<string>;
    };
    ordersCanMatch_: {
        callAsync(addrs_0: string[], uints_1: BigNumber[], feeMethodsSidesKindsHowToCalls_2: Array<number | BigNumber>, calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    approveOrder_: {
        sendTransactionAsync(addrs_0: string[], uints_1: BigNumber[], feeMethod_2: number | BigNumber, side_3: number | BigNumber, saleKind_4: number | BigNumber, howToCall_5: number | BigNumber, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, orderbookInclusionDesired_9: boolean, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(addrs_0: string[], uints_1: BigNumber[], feeMethod_2: number | BigNumber, side_3: number | BigNumber, saleKind_4: number | BigNumber, howToCall_5: number | BigNumber, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, orderbookInclusionDesired_9: boolean): string;
    };
    registry: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    minimumMakerProtocolFee: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    hashToSign_: {
        callAsync(addrs_0: string[], uints_1: BigNumber[], feeMethod_2: number | BigNumber, side_3: number | BigNumber, saleKind_4: number | BigNumber, howToCall_5: number | BigNumber, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<string>;
    };
    cancelledOrFinalized: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    owner: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    exchangeToken: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    cancelOrder_: {
        sendTransactionAsync(addrs_0: string[], uints_1: BigNumber[], feeMethod_2: number | BigNumber, side_3: number | BigNumber, saleKind_4: number | BigNumber, howToCall_5: number | BigNumber, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, v_9: number | BigNumber, r_10: string, s_11: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(addrs_0: string[], uints_1: BigNumber[], feeMethod_2: number | BigNumber, side_3: number | BigNumber, saleKind_4: number | BigNumber, howToCall_5: number | BigNumber, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, v_9: number | BigNumber, r_10: string, s_11: string): string;
    };
    atomicMatch_: {
        sendTransactionAsync(addrs_0: string[], uints_1: BigNumber[], feeMethodsSidesKindsHowToCalls_2: Array<number | BigNumber>, calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, vs_9: Array<number | BigNumber>, rssMetadata_10: string[], txData?: Partial<TxDataPayable>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(addrs_0: string[], uints_1: BigNumber[], feeMethodsSidesKindsHowToCalls_2: Array<number | BigNumber>, calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, vs_9: Array<number | BigNumber>, rssMetadata_10: string[]): string;
    };
    validateOrderParameters_: {
        callAsync(addrs_0: string[], uints_1: BigNumber[], feeMethod_2: number | BigNumber, side_3: number | BigNumber, saleKind_4: number | BigNumber, howToCall_5: number | BigNumber, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    INVERSE_BASIS_POINT: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    calculateMatchPrice_: {
        callAsync(addrs_0: string[], uints_1: BigNumber[], feeMethodsSidesKindsHowToCalls_2: Array<number | BigNumber>, calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, txData?: Partial<TxData>): Promise<BigNumber>;
    };
    approvedOrders: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner_0: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        getABIEncodedTransactionData(newOwner_0: string): string;
    };
    constructor(ethersContractInstance: ethers.Contract, defaults: Partial<TxData>);
}
