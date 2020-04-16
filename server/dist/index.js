"use strict";
var express = require("express");
var app = express();
app.get("/", function (req, res, next) {
    res.json(["test"]);
});
app.listen(3001, function () {
    console.log('server  is listening on port 3000');
});
//test
