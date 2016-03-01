"use strict";

var server = require('./server/server');
var path = require('path');
var fs = require('fs');
var config = require('./config/config')[process.env.NODE_ENV || 'development'];
var express = require('express');

// We will log normal api operations into api.log

// We will log all uncaught exceptions into exceptions.log
// We will log all uncaught exceptions into exceptions.log

var appPath = __dirname + config.appPath;

if (config.ENV === 'DEV') {
  server.app.use('/', express.static('app'));
  server.app.use('/scripts', express.static('app/scripts'));
  server.app.use('/views', express.static('app/views'));
  server.app.use('/fonts', express.static('app/fonts'));
  server.app.use('/images', express.static('app/images'));
  server.app.use('/styles', express.static('app/styles'));
  server.app.use('/bower_components', express.static('bower_components'));
}
else {
  server.app.use('/', express.static('dist'));
  server.app.use('/scripts', express.static('dist/scripts'));
  server.app.use('/views', express.static('dist/views'));
  server.app.use('/fonts', express.static('dist/fonts'));
  server.app.use('/images', express.static('www/app/images'));
  server.app.use('/styles', express.static('dist/styles'));
}


server.start();
console.log("Successfully started web server. Waiting for incoming connections...");