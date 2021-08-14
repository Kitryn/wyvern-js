import { BigNumber } from "@0x/utils";
import BN = require("bn.js");
import { ethers, BigNumber as ethersBN } from "ethers";
import { Order, SignedOrder } from "../types";
import { TxData, TxDataPayable } from "ethereum-types";
declare function toEthersBN(val: string | number | BigNumber | ethersBN): ethersBN;
declare function toBigNumberJS(val: string | number | BigNumber | ethersBN): BigNumber;
export declare const utils: {
    toEthersBN: typeof toEthersBN;
    toBigNumberJS: typeof toBigNumberJS;
    convertTxDataToEthers(txData: Partial<TxData> | Partial<TxDataPayable>): {
        gasPrice?: string | number | BigNumber | ethers.BigNumber | undefined;
        gasLimit?: ethers.BigNumber | undefined;
        value?: string | number | BigNumber | ethers.BigNumber | undefined;
        from?: string | undefined;
        to?: string | undefined;
        data?: string | undefined;
        nonce?: number | undefined;
    } | {
        gasPrice?: string | number | BigNumber | ethers.BigNumber | undefined;
        gasLimit?: ethers.BigNumber | undefined;
        value?: BigNumber | ethers.BigNumber | undefined;
        from?: string | undefined;
        to?: string | undefined;
        data?: string | undefined;
        nonce?: number | undefined;
    };
    /**
     * Converts BigNumber instance to BN
     * The only reason we convert to BN is to remain compatible with `ethABI. soliditySHA3` that
     * expects values of Solidity type `uint` to be passed as type `BN`.
     * We do not use BN anywhere else in the codebase.
     */
    bigNumberToBN(value: BigNumber): BN;
    consoleLog(message: string): void;
    isParityNode(nodeVersion: string): boolean;
    isTestRpc(nodeVersion: string): boolean;
    spawnSwitchErr(name: string, value: any): Error;
    getAssetHashHex(assetHash: string, schema: string): string;
    getOrderHashHex(order: Order | SignedOrder): string;
    getCurrentUnixTimestampSec(): BigNumber;
    getCurrentUnixTimestampMs(): BigNumber;
};
export {};
