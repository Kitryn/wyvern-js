"use strict";
/* Sourced from 0x.js */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
var utils_1 = require("@0x/utils");
var BN = require("bn.js");
var ethers_1 = require("ethers");
var ethABI = __importStar(require("ethereumjs-abi"));
var ethUtil = __importStar(require("ethereumjs-util"));
var _ = __importStar(require("lodash"));
var types_1 = require("../types");
function toEthersBN(val) {
    if (val === "0x") {
        val = 0;
    }
    if (typeof val === "string" || typeof val === "number") {
        val = parseInt(val);
        if (isNaN(val)) {
            throw new Error("Invalid number, cannot convert to Ethers BigNumber");
        }
    }
    else if (utils_1.BigNumber.isBigNumber(val)) {
        // probably a BigNumber instance
        if (val.isNaN()) {
            throw new Error("BigNumber NaN provided to argument, invalid");
        }
        val = val.integerValue(utils_1.BigNumber.ROUND_CEIL);
    }
    return ethers_1.ethers.BigNumber.from(val.toString());
}
function toBigNumberJS(val) {
    if (val === "0x") {
        val = 0;
    }
    if (typeof val === "string" || typeof val === "number") {
        val = parseInt(val);
        if (isNaN(val)) {
            throw new Error("Invalid number, cannot convert to Ethers BigNumber");
        }
    }
    else if (utils_1.BigNumber.isBigNumber(val) && typeof val.isNaN === "function") {
        // probably a BigNumber instance
        if (val.isNaN()) {
            throw new Error("BigNumber NaN provided to argument, invalid");
        }
        val = val.integerValue(utils_1.BigNumber.ROUND_CEIL);
    }
    return new utils_1.BigNumber(val.toString());
}
exports.utils = {
    toEthersBN: toEthersBN,
    toBigNumberJS: toBigNumberJS,
    convertTxDataToEthers: function (txData) {
        // Remove properties not used by Ethers
        var gas = txData.gas, accessList = txData.accessList, _data = __rest(txData, ["gas", "accessList"]); // ethers calls this gasLimit
        return __assign(__assign(__assign(__assign({}, _data), (txData.value ? { value: toEthersBN(txData.value) } : {})), (gas ? { gasLimit: toEthersBN(gas) } : {})), (txData.gasPrice ? { gasPrice: toEthersBN(txData.gasPrice) } : {}));
    },
    /**
     * Converts BigNumber instance to BN
     * The only reason we convert to BN is to remain compatible with `ethABI. soliditySHA3` that
     * expects values of Solidity type `uint` to be passed as type `BN`.
     * We do not use BN anywhere else in the codebase.
     */
    bigNumberToBN: function (value) {
        return new BN(value.toString(), 10);
    },
    consoleLog: function (message) {
        // tslint:disable-next-line: no-console
        console.log(message);
    },
    isParityNode: function (nodeVersion) {
        return _.includes(nodeVersion, "Parity");
    },
    isTestRpc: function (nodeVersion) {
        return _.includes(nodeVersion, "TestRPC");
    },
    spawnSwitchErr: function (name, value) {
        return new Error("Unexpected switch value: " + value + " encountered for " + name);
    },
    getAssetHashHex: function (assetHash, schema) {
        var concat = schema + ":" + assetHash;
        var hashBuf = ethABI.soliditySHA3(["string"], [concat]);
        return ethUtil.bufferToHex(hashBuf);
    },
    getOrderHashHex: function (order) {
        var orderParts = [
            { value: order.exchange, type: types_1.SolidityTypes.Address },
            { value: order.maker, type: types_1.SolidityTypes.Address },
            { value: order.taker, type: types_1.SolidityTypes.Address },
            {
                value: exports.utils.bigNumberToBN(order.makerRelayerFee),
                type: types_1.SolidityTypes.Uint256,
            },
            {
                value: exports.utils.bigNumberToBN(order.takerRelayerFee),
                type: types_1.SolidityTypes.Uint256,
            },
            {
                value: exports.utils.bigNumberToBN(order.makerProtocolFee),
                type: types_1.SolidityTypes.Uint256,
            },
            {
                value: exports.utils.bigNumberToBN(order.takerProtocolFee),
                type: types_1.SolidityTypes.Uint256,
            },
            { value: order.feeRecipient, type: types_1.SolidityTypes.Address },
            { value: order.feeMethod, type: types_1.SolidityTypes.Uint8 },
            { value: order.side, type: types_1.SolidityTypes.Uint8 },
            { value: order.saleKind, type: types_1.SolidityTypes.Uint8 },
            { value: order.target, type: types_1.SolidityTypes.Address },
            { value: order.howToCall, type: types_1.SolidityTypes.Uint8 },
            {
                value: new Buffer(order.calldata.slice(2), "hex"),
                type: types_1.SolidityTypes.Bytes,
            },
            {
                value: new Buffer(order.replacementPattern.slice(2), "hex"),
                type: types_1.SolidityTypes.Bytes,
            },
            { value: order.staticTarget, type: types_1.SolidityTypes.Address },
            {
                value: new Buffer(order.staticExtradata.slice(2), "hex"),
                type: types_1.SolidityTypes.Bytes,
            },
            { value: order.paymentToken, type: types_1.SolidityTypes.Address },
            {
                value: exports.utils.bigNumberToBN(order.basePrice),
                type: types_1.SolidityTypes.Uint256,
            },
            {
                value: exports.utils.bigNumberToBN(order.extra),
                type: types_1.SolidityTypes.Uint256,
            },
            {
                value: exports.utils.bigNumberToBN(order.listingTime),
                type: types_1.SolidityTypes.Uint256,
            },
            {
                value: exports.utils.bigNumberToBN(order.expirationTime),
                type: types_1.SolidityTypes.Uint256,
            },
            {
                value: exports.utils.bigNumberToBN(order.salt),
                type: types_1.SolidityTypes.Uint256,
            },
        ];
        var types = _.map(orderParts, function (o) { return o.type; });
        var values = _.map(orderParts, function (o) { return o.value; });
        var hash = ethABI.soliditySHA3(types, values);
        return ethUtil.bufferToHex(hash);
    },
    getCurrentUnixTimestampSec: function () {
        return new utils_1.BigNumber(Date.now() / 1000).integerValue();
    },
    getCurrentUnixTimestampMs: function () {
        return new utils_1.BigNumber(Date.now());
    },
};
//# sourceMappingURL=utils.js.map