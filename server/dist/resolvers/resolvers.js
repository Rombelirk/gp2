"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../models/User"));
var meResolver = function (a, b, c) {
    return { username: "Vasya" };
};
var signupResolver = function (a, args, c) {
    console.log(a, args.url, c);
    var user = new User_1.default({ login: args.url });
    return user.save().then(function (res) {
        console.log(res);
        return "res.login";
    });
};
var Query = {
    me: meResolver
};
var Mutation = {
    signup: signupResolver
};
var resolvers = {
    Query: Query,
    Mutation: Mutation
};
exports.default = resolvers;
