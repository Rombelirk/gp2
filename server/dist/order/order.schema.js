"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var orderSchema = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type BuyOrder {\n        _id: String!\n        stock: Stock\n        price: Int!\n    }\n\n    type SellOrder {\n        _id: String\n        boughtStock: Stock\n        price: Int\n    }\n\n    input CreateBuyOrderInput {\n        stockId: String!\n        price: Int!\n    }\n\n    input CreateSellOrderInput {\n        boughtStockId: String!\n        price: Int!\n    }\n\n    input GetBuyOrdersInput {\n        type: String\n    }\n\n    extend type Mutation {\n        createBuyOrder(input: CreateBuyOrderInput): BuyOrder\n        createSellOrder(input: CreateSellOrderInput): SellOrder\n    }\n\n    extend type Query {\n        getBuyOrders(input: GetBuyOrdersInput): [BuyOrder!]!\n    }\n"], ["\n    type BuyOrder {\n        _id: String!\n        stock: Stock\n        price: Int!\n    }\n\n    type SellOrder {\n        _id: String\n        boughtStock: Stock\n        price: Int\n    }\n\n    input CreateBuyOrderInput {\n        stockId: String!\n        price: Int!\n    }\n\n    input CreateSellOrderInput {\n        boughtStockId: String!\n        price: Int!\n    }\n\n    input GetBuyOrdersInput {\n        type: String\n    }\n\n    extend type Mutation {\n        createBuyOrder(input: CreateBuyOrderInput): BuyOrder\n        createSellOrder(input: CreateSellOrderInput): SellOrder\n    }\n\n    extend type Query {\n        getBuyOrders(input: GetBuyOrdersInput): [BuyOrder!]!\n    }\n"])));
exports.default = orderSchema;
var templateObject_1;
