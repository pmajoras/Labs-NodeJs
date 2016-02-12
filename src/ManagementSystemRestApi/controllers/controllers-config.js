"use strict";

var controllers = [];
controllers.push(require("./routes/task-controller"));
controllers.push(require("./routes/user-controller"));
controllers.push(require("./routes/authentication-controller"));

module.exports = controllers;