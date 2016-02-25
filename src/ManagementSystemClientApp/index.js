"use strict";

var server = require('./server/server');
var path = require('path');

// We will log normal api operations into api.log

// We will log all uncaught exceptions into exceptions.log
// We will log all uncaught exceptions into exceptions.log


server.app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/www/index.html'));
});

server.app.get('/public/:path', function (req, res) {
  res.sendFile(path.join(__dirname + '/www/dist/' + req.params.path));
});

server.start();
console.log("Successfully started web server. Waiting for incoming connections...");