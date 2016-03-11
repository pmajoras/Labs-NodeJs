"use strict";

var appErrors = require('../../app-errors/app-error').createAppError;

/**
 * 
 */
function setup(req, res, next) {
  console.log("req", req.currentUser);
  console.log("req", req.params);
  if (!req.currentUser) {
    next(appErrors({ statusCode: 401 }));    
  }
  else if (req.currentUser._id !== req.params.id) {
    next(appErrors({ statusCode: 403 }));
  }
  else {
    next();
  }
}

module.exports = setup;