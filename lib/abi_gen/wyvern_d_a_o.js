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
exports.WyvernDAOContract = void 0;
var utils_1 = require("../utils/utils");
var utils_2 = require("@0x/utils");
var base_contract_1 = require("./base_contract");
var WyvernDAOContract = /** @class */ (function (_super) {
    __extends(WyvernDAOContract, _super);
    function WyvernDAOContract(ethersContractInstance, defaults) {
        var _this = _super.call(this, ethersContractInstance, defaults) || this;
        _this.proposals = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).proposals.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.delegatesByDelegator = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).delegatesByDelegator.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
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
        _this.REQUIRED_SHARES_TO_BE_BOARD_MEMBER = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).REQUIRED_SHARES_TO_BE_BOARD_MEMBER.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.lockedDelegatingTokens = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).lockedDelegatingTokens.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.countVotes = {
            callAsync: function (proposalNumber_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(proposalNumber_0);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).countVotes.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.executeProposal = {
            sendTransactionAsync: function (proposalNumber_0, transactionBytecode_1, txData) {
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
                                ethersInputs = self.convertEthersInputs(proposalNumber_0, transactionBytecode_1);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).executeProposal.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (proposalNumber_0, transactionBytecode_1, txData) {
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
                                ethersInputs = self.convertEthersInputs(proposalNumber_0, transactionBytecode_1);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).executeProposal.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (proposalNumber_0, transactionBytecode_1) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(proposalNumber_0, transactionBytecode_1);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("executeProposal", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.sharesTokenAddress = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).sharesTokenAddress.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.delegatedAmountsByDelegate = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).delegatedAmountsByDelegate.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.numProposals = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).numProposals.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.hasVoted = {
            callAsync: function (proposalNumber_0, shareholder_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(proposalNumber_0, shareholder_1);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).hasVoted.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.TOKEN_DECIMALS = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).TOKEN_DECIMALS.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.setDelegateAndLockTokens = {
            sendTransactionAsync: function (tokensToLock_0, delegate_1, txData) {
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
                                ethersInputs = self.convertEthersInputs(tokensToLock_0, delegate_1);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).setDelegateAndLockTokens.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (tokensToLock_0, delegate_1, txData) {
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
                                ethersInputs = self.convertEthersInputs(tokensToLock_0, delegate_1);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).setDelegateAndLockTokens.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (tokensToLock_0, delegate_1) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(tokensToLock_0, delegate_1);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("setDelegateAndLockTokens", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.clearDelegateAndUnlockTokens = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance).clearDelegateAndUnlockTokens.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).clearDelegateAndUnlockTokens.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
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
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("clearDelegateAndUnlockTokens", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.debatingPeriodInMinutes = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).debatingPeriodInMinutes.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.changeVotingRules = {
            sendTransactionAsync: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txData) {
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
                                ethersInputs = self.convertEthersInputs(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).changeVotingRules.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txData) {
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
                                ethersInputs = self.convertEthersInputs(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).changeVotingRules.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("changeVotingRules", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.minimumQuorum = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).minimumQuorum.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.receiveApproval = {
            sendTransactionAsync: function (from_0, value_1, token_2, extraData_3, txData) {
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
                                ethersInputs = self.convertEthersInputs(from_0, value_1, token_2, extraData_3);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).receiveApproval.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (from_0, value_1, token_2, extraData_3, txData) {
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
                                ethersInputs = self.convertEthersInputs(from_0, value_1, token_2, extraData_3);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).receiveApproval.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (from_0, value_1, token_2, extraData_3) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(from_0, value_1, token_2, extraData_3);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("receiveApproval", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.tokenLocker = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).tokenLocker.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.MINIMUM_QUORUM = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).MINIMUM_QUORUM.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.requiredSharesToBeBoardMember = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).requiredSharesToBeBoardMember.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.vote = {
            sendTransactionAsync: function (proposalNumber_0, supportsProposal_1, txData) {
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
                                ethersInputs = self.convertEthersInputs(proposalNumber_0, supportsProposal_1);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).vote.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (proposalNumber_0, supportsProposal_1, txData) {
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
                                ethersInputs = self.convertEthersInputs(proposalNumber_0, supportsProposal_1);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).vote.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (proposalNumber_0, supportsProposal_1) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(proposalNumber_0, supportsProposal_1);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("vote", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.newProposal = {
            sendTransactionAsync: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txData) {
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
                                ethersInputs = self.convertEthersInputs(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3);
                                return [4 /*yield*/, (_a = self.ethersContractInstance).newProposal.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                txResponse = _b.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txData) {
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
                                ethersInputs = self.convertEthersInputs(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.estimateGas).newProposal.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, new utils_2.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3) {
                var self = this;
                var ethersInputs = self.convertEthersInputs(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3);
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("newProposal", __spreadArray([], ethersInputs));
                return abiEncodedTransactionData;
            },
        };
        _this.DEBATE_PERIOD_MINUTES = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).DEBATE_PERIOD_MINUTES.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.checkProposalCode = {
            callAsync: function (proposalNumber_0, beneficiary_1, weiAmount_2, transactionBytecode_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, ethersInputs, ethersTxData, result, convertedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                ethersInputs = self.convertEthersInputs(proposalNumber_0, beneficiary_1, weiAmount_2, transactionBytecode_3);
                                ethersTxData = utils_1.utils.convertTxDataToEthers(txData);
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).checkProposalCode.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        _this.totalLockedTokens = {
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
                                return [4 /*yield*/, (_a = self.ethersContractInstance.functions).totalLockedTokens.apply(_a, __spreadArray(__spreadArray([], ethersInputs), [ethersTxData]))];
                            case 1:
                                result = _b.sent();
                                convertedResult = self.convertEthersOutputs(result);
                                return [2 /*return*/, convertedResult];
                        }
                    });
                });
            },
        };
        utils_2.classUtils.bindAll(_this, ["ethersContractInstance", "defaults"]);
        return _this;
    }
    return WyvernDAOContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernDAOContract = WyvernDAOContract;
//# sourceMappingURL=wyvern_d_a_o.js.map