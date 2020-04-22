"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var userSchema = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Stocks {\n        stock: Stock!\n        purchasePrice: Int!\n    }\n\n    type Portfolio {\n        stocks: Stocks!\n    }\n\n    type User {\n        _id: String!\n        login: String!\n        portfolio: Portfolio!\n    }\n"], ["\n    type Stocks {\n        stock: Stock!\n        purchasePrice: Int!\n    }\n\n    type Portfolio {\n        stocks: Stocks!\n    }\n\n    type User {\n        _id: String!\n        login: String!\n        portfolio: Portfolio!\n    }\n"])));
exports.default = userSchema;
var templateObject_1;
