"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var stockSchema = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type PriceChanges {\n        time: String!\n        value: Int!\n    }\n    type Stock {\n        _id: String!\n        ticker: String!\n        name: String!\n        description: String!\n        price: Int!\n        priceChanges: PriceChanges!\n    }\n"], ["\n    type PriceChanges {\n        time: String!\n        value: Int!\n    }\n    type Stock {\n        _id: String!\n        ticker: String!\n        name: String!\n        description: String!\n        price: Int!\n        priceChanges: PriceChanges!\n    }\n"])));
exports.default = stockSchema;
var templateObject_1;
