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
exports.WyvernDAOContract = void 0;
var utils_1 = require("@0x/utils");
var base_contract_1 = require("./base_contract");
var WyvernDAOContract = /** @class */ (function (_super) {
    __extends(WyvernDAOContract, _super);
    function WyvernDAOContract(ethersContractInstance, defaults) {
        var _this = _super.call(this, ethersContractInstance, defaults) || this;
        _this.proposals = {
            callAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.proposals(index_0_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.delegatesByDelegator = {
            callAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.delegatesByDelegator(index_0_0, txData)];
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
        _this.REQUIRED_SHARES_TO_BE_BOARD_MEMBER = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.REQUIRED_SHARES_TO_BE_BOARD_MEMBER(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.lockedDelegatingTokens = {
            callAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.lockedDelegatingTokens(index_0_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.countVotes = {
            callAsync: function (proposalNumber_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.countVotes(proposalNumber_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.executeProposal = {
            sendTransactionAsync: function (proposalNumber_0, transactionBytecode_1, txData) {
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
                                return [4 /*yield*/, self.ethersContractInstance.executeProposal(proposalNumber_0, transactionBytecode_1, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (proposalNumber_0, transactionBytecode_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.estimateGas.executeProposal(proposalNumber_0, transactionBytecode_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, new utils_1.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (proposalNumber_0, transactionBytecode_1) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("executeProposal", [
                    proposalNumber_0,
                    transactionBytecode_1,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.sharesTokenAddress = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.sharesTokenAddress(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.delegatedAmountsByDelegate = {
            callAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.delegatedAmountsByDelegate(index_0_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.numProposals = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.numProposals(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.hasVoted = {
            callAsync: function (proposalNumber_0, shareholder_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.hasVoted(proposalNumber_0, shareholder_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.TOKEN_DECIMALS = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.TOKEN_DECIMALS(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.setDelegateAndLockTokens = {
            sendTransactionAsync: function (tokensToLock_0, delegate_1, txData) {
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
                                return [4 /*yield*/, self.ethersContractInstance.setDelegateAndLockTokens(tokensToLock_0, delegate_1, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (tokensToLock_0, delegate_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.estimateGas.setDelegateAndLockTokens(tokensToLock_0, delegate_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, new utils_1.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (tokensToLock_0, delegate_1) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("setDelegateAndLockTokens", [
                    tokensToLock_0,
                    delegate_1,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.clearDelegateAndUnlockTokens = {
            sendTransactionAsync: function (txData) {
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
                                return [4 /*yield*/, self.ethersContractInstance.clearDelegateAndUnlockTokens(txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.estimateGas.clearDelegateAndUnlockTokens(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, new utils_1.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("clearDelegateAndUnlockTokens", []);
                return abiEncodedTransactionData;
            },
        };
        _this.debatingPeriodInMinutes = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.debatingPeriodInMinutes(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.changeVotingRules = {
            sendTransactionAsync: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txData) {
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
                                return [4 /*yield*/, self.ethersContractInstance.changeVotingRules(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.estimateGas.changeVotingRules(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, new utils_1.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("changeVotingRules", [
                    minimumSharesToPassAVote_0,
                    minutesForDebate_1,
                    sharesToBeBoardMember_2,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.minimumQuorum = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.minimumQuorum(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.receiveApproval = {
            sendTransactionAsync: function (from_0, value_1, token_2, extraData_3, txData) {
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
                                return [4 /*yield*/, self.ethersContractInstance.receiveApproval(from_0, value_1, token_2, extraData_3, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (from_0, value_1, token_2, extraData_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.estimateGas.receiveApproval(from_0, value_1, token_2, extraData_3, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, new utils_1.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (from_0, value_1, token_2, extraData_3) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("receiveApproval", [
                    from_0,
                    value_1,
                    token_2,
                    extraData_3,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.tokenLocker = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.tokenLocker(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.MINIMUM_QUORUM = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.MINIMUM_QUORUM(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.requiredSharesToBeBoardMember = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.requiredSharesToBeBoardMember(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.vote = {
            sendTransactionAsync: function (proposalNumber_0, supportsProposal_1, txData) {
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
                                return [4 /*yield*/, self.ethersContractInstance.vote(proposalNumber_0, supportsProposal_1, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (proposalNumber_0, supportsProposal_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.estimateGas.vote(proposalNumber_0, supportsProposal_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, new utils_1.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (proposalNumber_0, supportsProposal_1) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("vote", [
                    proposalNumber_0,
                    supportsProposal_1,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.newProposal = {
            sendTransactionAsync: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txData) {
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
                                return [4 /*yield*/, self.ethersContractInstance.newProposal(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txDataWithDefaults)];
                            case 2:
                                txResponse = _a.sent();
                                return [2 /*return*/, txResponse];
                        }
                    });
                });
            },
            estimateGasAsync: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self.ethersContractInstance.estimateGas.newProposal(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, new utils_1.BigNumber(gas.toString())];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3) {
                var self = this;
                var abiEncodedTransactionData = self.ethersContractInstance.interface.encodeFunctionData("newProposal", [
                    beneficiary_0,
                    weiAmount_1,
                    jobMetadataHash_2,
                    transactionBytecode_3,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.DEBATE_PERIOD_MINUTES = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.DEBATE_PERIOD_MINUTES(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.checkProposalCode = {
            callAsync: function (proposalNumber_0, beneficiary_1, weiAmount_2, transactionBytecode_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.checkProposalCode(proposalNumber_0, beneficiary_1, weiAmount_2, transactionBytecode_3, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.totalLockedTokens = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.ethersContractInstance.functions.totalLockedTokens(txData)];
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
    return WyvernDAOContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernDAOContract = WyvernDAOContract;
//# sourceMappingURL=wyvern_d_a_o.js.map