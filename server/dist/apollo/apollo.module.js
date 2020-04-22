"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var user_schema_1 = __importDefault(require("../user/user.schema"));
var order_schema_1 = __importDefault(require("../order/order.schema"));
var stock_schema_1 = __importDefault(require("../stock/stock.schema"));
var bought_stock_schema_1 = __importDefault(require("../bought_stock/bought_stock.schema"));
var apollo_server_express_2 = require("apollo-server-express");
var order_resolver_1 = require("../order/order.resolver");
var rootSchema = apollo_server_express_2.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query {\n        _empty: String\n    }\n    type Mutation {\n        _empty: String\n    }\n"], ["\n    type Query {\n        _empty: String\n    }\n    type Mutation {\n        _empty: String\n    }\n"])));
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: [
        rootSchema,
        user_schema_1.default,
        order_schema_1.default,
        stock_schema_1.default,
        bought_stock_schema_1.default,
    ],
    resolvers: {
        Query: {
            getBuyOrders: order_resolver_1.getBuyOrders,
        },
        Mutation: {
            createBuyOrder: order_resolver_1.createBuyOrder,
        },
    },
});
exports.default = server;
var templateObject_1;
