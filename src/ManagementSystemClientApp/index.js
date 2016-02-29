"use strict";

var server = require('./server/server');
var path = require('path');
var fs = require('fs');

// We will log normal api operations into api.log

// We will log all uncaught exceptions into exceptions.log
// We will log all uncaught exceptions into exceptions.log

server.app.get('/', function (req, res, next) {
  var readPath = __dirname + '/dist';
  fs.readdir(readPath, function (err, fileNames) {

    for (var i = 0; i < fileNames.length; i++) {
      var fileName = fileNames[i];
      if (path.extname(fileName) === ".html") {
        res.sendFile(path.join(readPath, fileName));
        return;
      }
    }

    res.status(404).send('Not found');
  });
});

server.app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname + '/app/favicon.ico'));
});

server.app.get('/views/:path', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/views/' + req.params.path));
});

server.app.get('/styles/:path', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/styles/' + req.params.path));
});

server.app.get('/scripts/:path', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/scripts/' + req.params.path));
});

server.app.get('/fonts/:path', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/fonts/' + req.params.path));
});

server.app.get('/images/:path', function (req, res) {
  res.sendFile(path.join(__dirname + '/www/app/images/' + req.params.path));
});

server.start();
console.log("Successfully started web server. Waiting for incoming connections...");