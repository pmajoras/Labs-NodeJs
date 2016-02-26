"use strict";

var server = require('./server/server');
var path = require('path');

// We will log normal api operations into api.log

// We will log all uncaught exceptions into exceptions.log
// We will log all uncaught exceptions into exceptions.log


server.app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/www/index.html'));
});

server.app.get('/public/css/:path', function (req, res) {
  res.sendFile(path.join(__dirname + '/www/dist/css/' + req.params.path));
});

server.app.get('/public/js/:path', function (req, res) {
  res.sendFile(path.join(__dirname + '/www/dist/js/' + req.params.path));
});

server.start();
console.log("Successfully started web server. Waiting for incoming connections...");