"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
var graphql_tools_1 = require("graphql-tools");
var resolverMap_1 = __importDefault(require("./resolverMap"));
var gql = require("apollo-server-express").gql;
var typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    helloWorld: String!\n  }\n"], ["\n  type Query {\n    helloWorld: String!\n  }\n"])));
var schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: [typeDefs],
    resolvers: resolverMap_1.default,
});
exports.default = schema;
var templateObject_1;
