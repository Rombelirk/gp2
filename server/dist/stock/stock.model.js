"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.StockSchema = new mongoose_1.Schema({
    ticker: String,
    name: String,
    description: String,
    price: Number,
    priceChanges: [
        {
            time: Date,
            value: Number
        }
    ]
});
var Stock = mongoose_1.model('Stock', exports.StockSchema);
exports.default = Stock;
