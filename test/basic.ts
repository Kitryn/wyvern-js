import { assert } from "chai";
import { describe, it } from "mocha";

/// <reference path="../src/globals.d.ts"
import * as ethABI from "ethereumjs-abi";

import { WyvernProtocol } from "../src/index";
import { AbiType, FunctionInputKind, StateMutability } from "../src/types";

// import * as ordersAndHashesJSON from "./ordersAndHashes.json";
const ordersAndHashesJSON = require("./ordersAndHashes.json");
const ordersAndHashes = ordersAndHashesJSON as any;

describe("basic", () => {
    it("Null address is correct", () => {
        assert.equal(
            WyvernProtocol.NULL_ADDRESS,
            "0x0000000000000000000000000000000000000000"
        );
    });

    it("Max uint256 is correct", () => {
        assert.equal(
            WyvernProtocol.MAX_UINT_256.toString(),
            "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        );
    });

    ordersAndHashes.map((orderAndHash: any, index: number) => {
        it("Order #" + index + " hash is correct", () => {
            const hash = WyvernProtocol.getOrderHashHex(orderAndHash.order);
            assert.equal(hash, orderAndHash.hash);
        });
    });

    it("First replacementPattern encoding is correct", () => {
        const annotatedABI = {
            type: AbiType.Function,
            name: "testFunction",
            target: "",
            inputs: [],
            outputs: [],
            constant: false,
            stateMutability: StateMutability.Payable,
            payable: true,
        };
        const encoded = WyvernProtocol.encodeReplacementPattern(annotatedABI);
        assert.equal(encoded, "0x00000000");
        const methodID =
            "0x" + ethABI.methodID("testFunction", []).toString("hex");
        assert.equal(methodID, "0xe16b4a9b");
    });

    it("Second complex replacementPattern encoding is correct", () => {
        const annotatedABI = {
            type: AbiType.Function,
            name: "testFunction",
            target: "",
            inputs: [
                {
                    name: "index",
                    type: "uint256",
                    kind: FunctionInputKind.Replaceable,
                },
            ],
            outputs: [],
            constant: false,
            stateMutability: StateMutability.Payable,
            payable: true,
        };
        const encoded = WyvernProtocol.encodeReplacementPattern(annotatedABI);
        assert.equal(
            encoded,
            "0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
    });

    it("Third replacementPattern encoding is correct", () => {
        const annotatedABI = {
            type: AbiType.Function,
            name: "testFunction",
            target: "",
            inputs: [
                {
                    name: "index",
                    type: "uint256",
                    kind: FunctionInputKind.Replaceable,
                },
                {
                    name: "address",
                    type: "address",
                    kind: FunctionInputKind.Owner,
                },
            ],
            outputs: [],
            constant: false,
            stateMutability: StateMutability.Payable,
            payable: true,
        };
        const encoded = WyvernProtocol.encodeReplacementPattern(annotatedABI);
        assert.equal(
            encoded,
            "0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000"
        );
    });

    it("Fourth replacementPattern encoding is correct", () => {
        const annotatedABI = {
            type: AbiType.Function,
            name: "testFunction",
            target: "",
            inputs: [
                {
                    name: "index",
                    type: "uint256",
                    kind: FunctionInputKind.Replaceable,
                },
                {
                    name: "addr",
                    type: "address",
                    kind: FunctionInputKind.Owner,
                },
                {
                    name: "bytes",
                    type: "bytes32",
                    kind: FunctionInputKind.Replaceable,
                },
            ],
            outputs: [],
            constant: false,
            stateMutability: StateMutability.Payable,
            payable: true,
        };
        const encoded = WyvernProtocol.encodeReplacementPattern(annotatedABI);
        assert.equal(
            encoded,
            "0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
    });
});
