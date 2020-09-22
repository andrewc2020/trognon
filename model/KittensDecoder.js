"use strict";
exports.__esModule = true;
var ts_data_json_1 = require("ts.data.json");
var KittenDecoder_1 = require("./KittenDecoder");
exports.KittensDecoder = ts_data_json_1.JsonDecoder.array(KittenDecoder_1.KittenDecoder, 'KittensDecoder');
