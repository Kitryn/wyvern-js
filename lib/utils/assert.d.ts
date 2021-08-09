import { BigNumber } from "@0x/utils";
import { ECSignature } from "../types";
export declare const assert: {
    isValidSignature(orderHash: string, ecSignature: ECSignature, signerAddress: string): void;
    isBigNumber(variableName: string, value: BigNumber): void;
    isNumberLike(variableName: string, value: number | BigNumber): void;
    isValidBaseUnitAmount(variableName: string, value: BigNumber): void;
    isString(variableName: string, value: string): void;
    isFunction(variableName: string, value: any): void;
    isHexString(variableName: string, value: string): void;
    isETHAddressHex(variableName: string, value: string): void;
    doesBelongToStringEnum(variableName: string, value: string, stringEnum: any): void;
    hasAtMostOneUniqueValue(value: any[], errMsg: string): void;
    isNumber(variableName: string, value: number): void;
    isNumberOrBigNumber(variableName: string, value: any): void;
    isBoolean(variableName: string, value: boolean): void;
    isWeb3Provider(variableName: string, value: any): void;
    doesConformToSchema(variableName: string, value: any, schema: object, subSchemas?: object[] | undefined): void;
    doesMatchRegex(variableName: string, value: string, regex: RegExp): void;
    isWebUri(variableName: string, value: any): void;
    isUri(variableName: string, value: any): void;
    isBlockParam(variableName: string, value: any): void;
    isArray(variableName: string, value: any): void;
    assert(condition: boolean, message: string): void;
    typeAssertionMessage(variableName: string, type: string, value: any): string;
};
