import { AbiDefinition, LogEntry } from "ethereum-types";
import { DecodedLogArgs, LogWithDecodedArgs, RawLog } from "../types";
export declare class AbiDecoder {
    private _savedABIs;
    private _methodIds;
    private static _padZeros;
    constructor(abiArrays: AbiDefinition[][]);
    tryToDecodeLogOrNoop(log: LogEntry): LogWithDecodedArgs<DecodedLogArgs> | RawLog;
    private _addABI;
}
