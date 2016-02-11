"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var controllers = require('../controllers/controllers-config');
var routes = require('../routes-config/routes');
var config = require('../config/config');
var moongoseConnector = require('../infrastructure/moongose-connect');

exports.start = () => {
  moongoseConnector.startDb();
  console.log("Start function");
  app.use(bodyParser());
  app.use(bodyParser.json());
  routes.setup(app, controllers);
  var port = config.web.port || 8080;
  app.listen(port);
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
};
// *******************************************************
exports.app = app;
