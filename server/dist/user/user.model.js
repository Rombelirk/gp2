"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    login: String,
    password: String,
    portfolio: {
        stocks: [{ stock: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Stock' },
                purchasePrice: Number
            }],
    },
});
var User = mongoose_1.model('User', exports.UserSchema);
exports.default = User;
