"use strict";

var server = require('./Server/server');

// We will log normal api operations into api.log

// We will log all uncaught exceptions into exceptions.log

server.start();
console.log("Successfully started web server. Waiting for incoming connections...");