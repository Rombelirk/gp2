"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var apollo_module_1 = __importDefault(require("./apollo/apollo.module"));
var DBHOST = process.env.DBHOST;
var app = express_1.default();
apollo_module_1.default.applyMiddleware({ app: app, path: '/' });
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
