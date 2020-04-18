"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var schema_1 = __importDefault(require("./schema/schema"));
var resolvers_1 = __importDefault(require("./resolvers/resolvers"));
var mongoose_1 = __importDefault(require("mongoose"));
var DBHOST = process.env.DBHOST;
var app = express_1.default();
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
});
server.applyMiddleware({ app: app, path: '/graphql' });
mongoose_1.default
    .connect("mongodb://" + DBHOST + ":27017/projectdb", {
    useNewUrlParser: true,
})
    .then(function () {
    console.log('mongoose is up');
    app.listen({ port: 3001 }, function () {
        console.log('Apollo Server is running on http://localhost:3001/graphql');
    });
})
    .catch(function (err) { return console.log('ERROR:', err); });
