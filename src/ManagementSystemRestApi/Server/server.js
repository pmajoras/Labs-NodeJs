"use strict";

// Package modules
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var logger = require('./logger');

// Application modules
var controllers = require('../controllers/controllers-config');
var routes = require('../routes-config/routes');
var config = require('../config/config');
var moongoseConnector = require('../infrastructure/moongose-connect');
var middlewares = require('../middlewares/middlewares-config');

var app = express();

exports.start = () => {
  console.log("Start function");
  moongoseConnector.startDb();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  // use morgan to log requests to the console
  app.use(morgan('dev'));
  app.disable('etag');
  
  // middlewares setup
  middlewares.setup(app);
  // routes config
  routes.setup(app, controllers);

  app.use(function (req, res) {
    var response = res.getCurrentResponse();
    res.status(response.status).json(response.content);
    res.end();
  });
  
  // middlewares errors setup
  middlewares.setupErrorHandlers(app);

  let port = config.web.port || 8080;
  app.listen(port);
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
};
// *******************************************************
exports.app = app;
