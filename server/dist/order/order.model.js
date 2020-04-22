"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var BuyOrderSchema = new mongoose_1.Schema({
    stock: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Stock' },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    price: Number,
});
exports.BuyOrder = mongoose_1.model('BuyOrder', BuyOrderSchema);
var SellOrderSchema = new mongoose_1.Schema({
    boughtStock: { type: mongoose_1.Schema.Types.ObjectId, ref: 'BoughtStock' },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    price: Number,
});
exports.SellOrder = mongoose_1.model('SellOrder', SellOrderSchema);
