"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var boughtStockSchema = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type BoughtStock {\n        _id: String!\n        stock: Stock!\n        user: User!\n        purchasePrice: Int!\n    }\n"], ["\n    type BoughtStock {\n        _id: String!\n        stock: Stock!\n        user: User!\n        purchasePrice: Int!\n    }\n"])));
exports.default = boughtStockSchema;
var templateObject_1;
