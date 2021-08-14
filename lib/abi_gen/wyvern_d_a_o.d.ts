import { TxData } from "ethereum-types";
import { BigNumber } from "@0x/utils";
import { ethers } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { BaseContract } from "./base_contract";
export declare class WyvernDAOContract extends BaseContract {
    proposals: {
        callAsync(index_0_0: BigNumber, txData?: Partial<TxData>): Promise<[string, BigNumber, string, BigNumber, BigNumber, boolean, boolean, BigNumber, string]>;
    };
    delegatesByDelegator: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<string>;
    };
    name: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    REQUIRED_SHARES_TO_BE_BOARD_MEMBER: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    lockedDelegatingTokens: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<BigNumber>;
    };
    countVotes: {
        callAsync(proposalNumber_0: BigNumber, txData?: Partial<TxData>): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    executeProposal: {
        sendTransactionAsync(proposalNumber_0: BigNumber, transactionBytecode_1: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(proposalNumber_0: BigNumber, transactionBytecode_1: string, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(proposalNumber_0: BigNumber, transactionBytecode_1: string): string;
    };
    sharesTokenAddress: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    delegatedAmountsByDelegate: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<BigNumber>;
    };
    numProposals: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    hasVoted: {
        callAsync(proposalNumber_0: BigNumber, shareholder_1: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    TOKEN_DECIMALS: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    setDelegateAndLockTokens: {
        sendTransactionAsync(tokensToLock_0: BigNumber, delegate_1: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(tokensToLock_0: BigNumber, delegate_1: string, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(tokensToLock_0: BigNumber, delegate_1: string): string;
    };
    clearDelegateAndUnlockTokens: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    debatingPeriodInMinutes: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    changeVotingRules: {
        sendTransactionAsync(minimumSharesToPassAVote_0: BigNumber, minutesForDebate_1: BigNumber, sharesToBeBoardMember_2: BigNumber, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(minimumSharesToPassAVote_0: BigNumber, minutesForDebate_1: BigNumber, sharesToBeBoardMember_2: BigNumber, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(minimumSharesToPassAVote_0: BigNumber, minutesForDebate_1: BigNumber, sharesToBeBoardMember_2: BigNumber): string;
    };
    minimumQuorum: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    receiveApproval: {
        sendTransactionAsync(from_0: string, value_1: BigNumber, token_2: string, extraData_3: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(from_0: string, value_1: BigNumber, token_2: string, extraData_3: string, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(from_0: string, value_1: BigNumber, token_2: string, extraData_3: string): string;
    };
    tokenLocker: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    MINIMUM_QUORUM: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    requiredSharesToBeBoardMember: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    vote: {
        sendTransactionAsync(proposalNumber_0: BigNumber, supportsProposal_1: boolean, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(proposalNumber_0: BigNumber, supportsProposal_1: boolean, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(proposalNumber_0: BigNumber, supportsProposal_1: boolean): string;
    };
    newProposal: {
        sendTransactionAsync(beneficiary_0: string, weiAmount_1: BigNumber, jobMetadataHash_2: string, transactionBytecode_3: string, txData?: Partial<TxData>): Promise<TransactionResponse>;
        estimateGasAsync(beneficiary_0: string, weiAmount_1: BigNumber, jobMetadataHash_2: string, transactionBytecode_3: string, txData?: Partial<TxData>): Promise<BigNumber>;
        getABIEncodedTransactionData(beneficiary_0: string, weiAmount_1: BigNumber, jobMetadataHash_2: string, transactionBytecode_3: string): string;
    };
    DEBATE_PERIOD_MINUTES: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    checkProposalCode: {
        callAsync(proposalNumber_0: BigNumber, beneficiary_1: string, weiAmount_2: BigNumber, transactionBytecode_3: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    totalLockedTokens: {
        callAsync(txData?: Partial<TxData>): Promise<BigNumber>;
    };
    constructor(ethersContractInstance: ethers.Contract, defaults: Partial<TxData>);
}
