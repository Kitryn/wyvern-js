"use strict";
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
exports.BaseContract = void 0;
var ethers_1 = require("ethers");
var utils_1 = require("../utils/utils");
var utils_2 = require("@0x/utils");
var _ = __importStar(require("lodash"));
var BaseContract = /** @class */ (function () {
    function BaseContract(ethersContractInstance, defaults) {
        this.ethersContractInstance = ethersContractInstance;
        this.defaults = defaults;
    }
    BaseContract.prototype.applyDefaultsToTxDataAsync = function (txData, estimateGasAsync) {
        return __awaiter(this, void 0, void 0, function () {
            var removeUndefinedProperties, txDataWithDefaults, estimatedGas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeUndefinedProperties = _.pickBy;
                        txDataWithDefaults = __assign(__assign({}, removeUndefinedProperties(this.defaults)), removeUndefinedProperties(txData));
                        if (!(_.isUndefined(txDataWithDefaults.gas) &&
                            !_.isUndefined(estimateGasAsync))) return [3 /*break*/, 2];
                        return [4 /*yield*/, estimateGasAsync(txData)];
                    case 1:
                        estimatedGas = _a.sent();
                        txDataWithDefaults.gas = estimatedGas;
                        _a.label = 2;
                    case 2: return [2 /*return*/, txDataWithDefaults];
                }
            });
        });
    };
    BaseContract.prototype.convertEthersInputs = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            // types to look for: BigNumber, BigNumber[]
            if (Array.isArray(args[i]) && utils_2.BigNumber.isBigNumber(args[i][0])) {
                args[i] = args[i].map(function (val) { return utils_1.utils.toEthersBN(val); });
            }
            else if (utils_2.BigNumber.isBigNumber(args[i])) {
                args[i] = utils_1.utils.toEthersBN(args[i]);
            }
        }
        return args;
    };
    BaseContract.prototype.convertEthersOutputs = function (arr) {
        var output = [];
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && ethers_1.ethers.BigNumber.isBigNumber(arr[i][0])) {
                output[i] = arr[i].map(function (val) { return utils_1.utils.toBigNumberJS(val); });
            }
            else if (ethers_1.ethers.BigNumber.isBigNumber(arr[i])) {
                output[i] = utils_1.utils.toBigNumberJS(arr[i]);
            }
            else {
                output[i] = arr[i];
            }
        }
        // To keep previous behaviour
        if (arr.length === 1) {
            return output[0];
        }
        else {
            return output;
        }
    };
    return BaseContract;
}());
exports.BaseContract = BaseContract;
//# sourceMappingURL=base_contract.js.map