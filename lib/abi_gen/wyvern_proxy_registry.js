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
exports.WyvernProxyRegistryContract = void 0;
var utils_1 = require("../utils/utils");
var utils_2 = require("@0x/utils");
var base_contract_1 = require("./base_contract");
var WyvernProxyRegistryContract = /** @class */ (function (_super) {
    __extends(WyvernProxyRegistryContract, _super);
    function WyvernProxyRegistryContract(ethersContractInstance, defaults) {
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
        _this.initialAddressSet = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).initialAddressSet.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.endGrantAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
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
                                ethersInputs = self.convertEthersInputs(addr_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).endGrantAuthentication.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
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
                                ethersInputs = self.convertEthersInputs(addr_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).endGrantAuthentication.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(addr_0);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("endGrantAuthentication", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.revokeAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
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
                                ethersInputs = self.convertEthersInputs(addr_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).revokeAuthentication.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
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
                                ethersInputs = self.convertEthersInputs(addr_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).revokeAuthentication.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(addr_0);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("revokeAuthentication", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.pending = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).pending.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.contracts = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).contracts.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
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
        _this.delegateProxyImplementation = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).delegateProxyImplementation.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.proxies = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).proxies.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.startGrantAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
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
                                ethersInputs = self.convertEthersInputs(addr_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).startGrantAuthentication.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
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
                                ethersInputs = self.convertEthersInputs(addr_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).startGrantAuthentication.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(addr_0);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("startGrantAuthentication", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.registerProxy = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance).registerProxy.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).registerProxy.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
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
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("registerProxy", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.DELAY_PERIOD = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).DELAY_PERIOD.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
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
        _this.grantInitialAuthentication = {
            sendTransactionAsync: function (authAddress_0, txData) {
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
                                ethersInputs = self.convertEthersInputs(authAddress_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).grantInitialAuthentication.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (authAddress_0, txData) {
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
                                ethersInputs = self.convertEthersInputs(authAddress_0);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).grantInitialAuthentication.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (authAddress_0) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(authAddress_0);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("grantInitialAuthentication", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        utils_2.classUtils.bindAll(_this, ["ethersContractInstance", "defaults"]);
        return _this;
    }
    return WyvernProxyRegistryContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernProxyRegistryContract = WyvernProxyRegistryContract;
//# sourceMappingURL=wyvern_proxy_registry.js.map