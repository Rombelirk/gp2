"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    login: String,
    password: String,
});
var User = mongoose_1.model('User', exports.UserSchema);
exports.default = User;
