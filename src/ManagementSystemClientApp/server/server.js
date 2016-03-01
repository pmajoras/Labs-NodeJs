"use strict";

// Package modules
var express = require('express');
var bodyParser = require('body-parser');
// Application modules
var config = require('../config/config')[process.env.NODE_ENV || 'development'];
var app = express();

exports.start = () => {
  console.log("Start function");
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  let port = config.port || 8080;
  
  if (config.ENV === 'DEV') {
    app.use('/', express.static('app'));
    app.use('/scripts', express.static('app/scripts'));
    app.use('/views', express.static('app/views'));
    app.use('/fonts', express.static('app/fonts'));
    app.use('/images', express.static('app/images'));
    app.use('/styles', express.static('app/styles'));
    app.use('/bower_components', express.static('bower_components'));
  }
  else {
    app.use('/', express.static('dist'));
    app.use('/scripts', express.static('dist/scripts'));
    app.use('/views', express.static('dist/views'));
    app.use('/fonts', express.static('dist/fonts'));
    app.use('/images', express.static('www/app/images'));
    app.use('/styles', express.static('dist/styles'));
  }
  
  app.listen(port);
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
};
// *******************************************************
exports.app = app;
