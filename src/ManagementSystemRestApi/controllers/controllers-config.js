"use strict";

var controllers = [];
controllers.push(require(__dirname + "/routes/task-controller"));
controllers.push(require(__dirname + "/routes/user-controller"));
controllers.push(require(__dirname + "/routes/authentication-controller"));

module.exports = controllers;