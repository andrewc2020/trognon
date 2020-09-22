"use strict";
exports.__esModule = true;
var hello_1 = require("./hello");
var chai_1 = require("chai");
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
require("mocha");
var superagent = require('superagent');
describe('Hello function', function () {
    it('should return hello world', function () {
        var result = hello_1["default"]();
        chai_1.expect(result).to.equal('Hello World!');
    });
}); //end of first describe
