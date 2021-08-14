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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WyvernExchangeContract = void 0;
var utils_1 = require("../utils/utils");
var utils_2 = require("@0x/utils");
var base_contract_1 = require("./base_contract");
var WyvernExchangeContract = /** @class */ (function (_super) {
    __extends(WyvernExchangeContract, _super);
    function WyvernExchangeContract(ethersContractInstance, defaults) {
        var _this = _super.call(this, ethersContractInstance, defaults) || this;
        _this.name = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).name.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.tokenTransferProxy = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).tokenTransferProxy.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.staticCall = {
            callAsync: function (target_0, calldata_1, extradata_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(target_0, calldata_1, extradata_2);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).staticCall.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.changeMinimumMakerProtocolFee = {
            sendTransactionAsync: function (newMinimumMakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, txResponse;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(newMinimumMakerProtocolFee_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).changeMinimumMakerProtocolFee.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (newMinimumMakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, gas;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(newMinimumMakerProtocolFee_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).changeMinimumMakerProtocolFee.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newMinimumMakerProtocolFee_0) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(newMinimumMakerProtocolFee_0);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("changeMinimumMakerProtocolFee", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.changeMinimumTakerProtocolFee = {
            sendTransactionAsync: function (newMinimumTakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, txResponse;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(newMinimumTakerProtocolFee_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).changeMinimumTakerProtocolFee.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (newMinimumTakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, gas;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(newMinimumTakerProtocolFee_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).changeMinimumTakerProtocolFee.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newMinimumTakerProtocolFee_0) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(newMinimumTakerProtocolFee_0);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("changeMinimumTakerProtocolFee", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.guardedArrayReplace = {
            callAsync: function (array_0, desired_1, mask_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(array_0, desired_1, mask_2);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).guardedArrayReplace.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.minimumTakerProtocolFee = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).minimumTakerProtocolFee.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.codename = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).codename.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.testCopyAddress = {
            callAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(addr_0);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).testCopyAddress.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.testCopy = {
            callAsync: function (arrToCopy_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(arrToCopy_0);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).testCopy.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.calculateCurrentPrice_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).calculateCurrentPrice_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.changeProtocolFeeRecipient = {
            sendTransactionAsync: function (newProtocolFeeRecipient_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, txResponse;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(newProtocolFeeRecipient_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).changeProtocolFeeRecipient.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (newProtocolFeeRecipient_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, gas;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(newProtocolFeeRecipient_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).changeProtocolFeeRecipient.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newProtocolFeeRecipient_0) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(newProtocolFeeRecipient_0);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("changeProtocolFeeRecipient", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.version = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).version.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.orderCalldataCanMatch = {
            callAsync: function (buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).orderCalldataCanMatch.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.validateOrder_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).validateOrder_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.calculateFinalPrice = {
            callAsync: function (side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).calculateFinalPrice.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.protocolFeeRecipient = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).protocolFeeRecipient.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.renounceOwnership = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, txResponse;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs();
                                return [4 /*yield*/, (_a = self.ethersContractInstance).renounceOwnership.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, gas;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs();
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).renounceOwnership.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var ethersInputs = self.convertEthersInputs();
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("renounceOwnership", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.hashOrder_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).hashOrder_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.ordersCanMatch_ = {
            callAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).ordersCanMatch_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.approveOrder_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, txResponse;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).approveOrder_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, gas;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).approveOrder_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("approveOrder_", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.registry = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).registry.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.minimumMakerProtocolFee = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).minimumMakerProtocolFee.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.hashToSign_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).hashToSign_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.cancelledOrFinalized = {
            callAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(index_0_0);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).cancelledOrFinalized.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.owner = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).owner.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.exchangeToken = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).exchangeToken.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.cancelOrder_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, txResponse;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).cancelOrder_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, gas;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).cancelOrder_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("cancelOrder_", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.atomicMatch_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, txResponse;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).atomicMatch_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, gas;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).atomicMatch_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("atomicMatch_", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.validateOrderParameters_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).validateOrderParameters_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.INVERSE_BASIS_POINT = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).INVERSE_BASIS_POINT.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.calculateMatchPrice_ = {
            callAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).calculateMatchPrice_.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.approvedOrders = {
            callAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(index_0_0);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).approvedOrders.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, txResponse;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(newOwner_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).transferOwnership.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, ethersTxData, ethersInputs, gas;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txDataWithDefaults);
                                ethersInputs = self.convertEthersInputs(newOwner_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).transferOwnership.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newOwner_0) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(newOwner_0);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("transferOwnership", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        utils_2.classUtils.bindAll(_this, ["ethersContractInstance", "defaults"]);
        return _this;
    }
    return WyvernExchangeContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernExchangeContract = WyvernExchangeContract;
//# sourceMappingURL=wyvern_exchange.js.map