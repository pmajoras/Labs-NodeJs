"use strict";

// Package modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// Application modules
var config = require('../config/config')[process.env.NODE_ENV || 'development'];
var app = express();

exports.start = () => {
  console.log("Start function");
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  let port = config.port || 8080;

  app.listen(port);
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
};
// *******************************************************
exports.app = app;
