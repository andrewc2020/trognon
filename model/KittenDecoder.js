"use strict";
exports.__esModule = true;
var ts_data_json_1 = require("ts.data.json");
exports.KittenDecoder = ts_data_json_1.JsonDecoder.object({
    _id: ts_data_json_1.JsonDecoder.string,
    name: ts_data_json_1.JsonDecoder.string,
    mother: ts_data_json_1.JsonDecoder.number
}, "KittenDecoder");
