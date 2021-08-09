"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WyvernTokenContract = void 0;
var utils_1 = require("@0x/utils");
var base_contract_1 = require("./base_contract");
var WyvernTokenContract = /** @class */ (function (_super) {
    __extends(WyvernTokenContract, _super);
    function WyvernTokenContract(ethersContractInstance, defaults) {
        var _this = _super.call(this, ethersContractInstance, defaults) || this;
        _this.MULTIPLIER = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.MULTIPLIER(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.name = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.name(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.maximumRedeemable = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.maximumRedeemable(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.approve = {
            sendTransactionAsync: function (_spender_0, _value_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.approve(_spender_0, _value_1, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_spender_0, _value_1) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("approve", [
                    _spender_0,
                    _value_1,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.totalSupply = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.totalSupply(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.multiplier = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.multiplier(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.transferFrom = {
            sendTransactionAsync: function (_from_0, _to_1, _value_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.transferFrom(_from_0, _to_1, _value_2, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_from_0, _to_1, _value_2) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("transferFrom", [
                    _from_0,
                    _to_1,
                    _value_2,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.decimals = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.decimals(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.burn = {
            sendTransactionAsync: function (_value_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.burn(_value_0, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_value_0) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("burn", [
                    _value_0,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.pubKeyToEthereumAddress = {
            callAsync: function (pubKey_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.pubKeyToEthereumAddress(pubKey_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.MINT_AMOUNT = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.MINT_AMOUNT(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.decreaseApproval = {
            sendTransactionAsync: function (_spender_0, _subtractedValue_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.decreaseApproval(_spender_0, _subtractedValue_1, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_spender_0, _subtractedValue_1) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("decreaseApproval", [
                    _spender_0,
                    _subtractedValue_1,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.balanceOf = {
            callAsync: function (_owner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.balanceOf(_owner_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.redeemUTXO = {
            sendTransactionAsync: function (txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.redeemUTXO(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("redeemUTXO", [
                    txid_0,
                    outputIndex_1,
                    satoshis_2,
                    proof_3,
                    pubKey_4,
                    isCompressed_5,
                    v_6,
                    r_7,
                    s_8,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.canRedeemUTXOHash = {
            callAsync: function (merkleLeafHash_0, proof_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.canRedeemUTXOHash(merkleLeafHash_0, proof_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.releaseTokens = {
            sendTransactionAsync: function (destination_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.releaseTokens(destination_0, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (destination_0) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("releaseTokens", [
                    destination_0,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.symbol = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.symbol(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.transfer = {
            sendTransactionAsync: function (_to_0, _value_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.transfer(_to_0, _value_1, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_to_0, _value_1) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("transfer", [
                    _to_0,
                    _value_1,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.validateSignature = {
            callAsync: function (hash_0, v_1, r_2, s_3, expected_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.validateSignature(hash_0, v_1, r_2, s_3, expected_4, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.verifyProof = {
            callAsync: function (proof_0, merkleLeafHash_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.verifyProof(proof_0, merkleLeafHash_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.canRedeemUTXO = {
            callAsync: function (txid_0, originalAddress_1, outputIndex_2, satoshis_3, proof_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.canRedeemUTXO(txid_0, originalAddress_1, outputIndex_2, satoshis_3, proof_4, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.ecdsaVerify = {
            callAsync: function (addr_0, pubKey_1, v_2, r_3, s_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.ecdsaVerify(addr_0, pubKey_1, v_2, r_3, s_4, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.increaseApproval = {
            sendTransactionAsync: function (_spender_0, _addedValue_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.increaseApproval(_spender_0, _addedValue_1, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_spender_0, _addedValue_1) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("increaseApproval", [
                    _spender_0,
                    _addedValue_1,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.allowance = {
            callAsync: function (_owner_0, _spender_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.allowance(_owner_0, _spender_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.pubKeyToBitcoinAddress = {
            callAsync: function (pubKey_0, isCompressed_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.pubKeyToBitcoinAddress(pubKey_0, isCompressed_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.rootUTXOMerkleTreeHash = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.rootUTXOMerkleTreeHash(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.totalRedeemed = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.totalRedeemed(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.SATS_TO_TOKENS = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.SATS_TO_TOKENS(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        utils_1.classUtils.bindAll(_this, ["ethersContractInstance", "defaults"]);
        return _this;
    }
    return WyvernTokenContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernTokenContract = WyvernTokenContract;
//# sourceMappingURL=wyvern_token.js.map