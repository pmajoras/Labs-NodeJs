"use strict";

// Package modules
var express = require('express');
var bodyParser = require('body-parser');

// Application modules
var config = require('../config/config');
var app = express();

exports.start = () => {
  console.log("Start function");
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  let port = config.web.port || 8080;

  app.listen(port);
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
};
// *******************************************************
exports.app = app;
