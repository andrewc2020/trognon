"use strict";
exports.__esModule = true;
var cats_json_1 = require("./cats.json");
exports["default"] = (function (req, res) {
    if (req.query.id) {
        res.json(cats_json_1["default"].cats.filter(function (cat) { return cat.id == req.query.id; }));
    }
    else {
        res.json(cats_json_1["default"]);
    }
});
