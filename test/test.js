"use strict";
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
exports.__esModule = true;
var chai_1 = require("chai");
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
require("mocha");
//services
var kitten_service_1 = require("../_services/kitten-service");
var KittensDecoder_1 = require("../model/KittensDecoder");
var moq_ts_1 = require("moq.ts");
var superagent = require('superagent');
describe('all tests', function () {
    describe("decoder tests", function () {
        var initialEnvVar;
        // mocking an environment
        beforeEach(function () {
            initialEnvVar = process.env.REST_URL;
        });
        afterEach(function () {
            process.env.REST_URL = initialEnvVar;
        });
        it('should decode a few kittens', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, kitten_service_1.kittenService.getAll().then(function (result) { return KittensDecoder_1.KittensDecoder.decodePromise(result.kittens); }).then(function (kittens) { return console.log(kittens); })["catch"]()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }); // end of first describe
    describe('mock tests', function () {
        it('should run a mock test', function () {
            var mock = new moq_ts_1.Mock()
                .setup(function (instance) { return instance([2, 1]); })
                .returns(2);
            var object = mock.object();
            var actual = object([2, 1]);
            // since the default comparisons logic sees [2, 1] and [2, 1] as different objects the provided setup would not work
            chai_1.expect(actual).to.equal(undefined);
        }); //end of first mock test
    }); //end of mock tests 
}); // end of all describes
