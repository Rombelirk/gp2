"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.BoughtStockSchema = new mongoose_1.Schema({
    stock: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Stock' },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    purchase_price: Number
});
var BoughtStock = mongoose_1.model('BoughtStock', exports.BoughtStockSchema);
exports.default = BoughtStock;
