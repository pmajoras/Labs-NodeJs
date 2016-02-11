"use strict";

// Package modules
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

// Application modules
var controllers = require('../controllers/controllers-config');
var routes = require('../routes-config/routes');
var config = require('../config/config');
var moongoseConnector = require('../infrastructure/moongose-connect');

var app = express();

exports.start = () => {
  console.log("Start function");
  moongoseConnector.startDb();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  // use morgan to log requests to the console
  app.use(morgan('dev'));
  
  // routes config
  routes.setup(app, controllers);

  var port = config.web.port || 8080;
  app.listen(port);
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
};
// *******************************************************
exports.app = app;
