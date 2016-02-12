"use strict";

var jwtMiddleware = require('./jwt-middleware');

/**
 * 
 */
function setup(app) {

  app.use(function (req, res, next) {
    jwtMiddleware.setup(req, res, next);
  });
}

exports.setup = setup;