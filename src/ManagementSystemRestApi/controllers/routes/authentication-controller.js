"use strict";
var RouteObject = require('../route-object');
var AuthenticationService = require('../../application-services/authentication-service');
var appConstants = require('../../config/app-constants');
var BaseController = require('../base-controller');

class AuthenticationController extends BaseController {
  constructor(allowedPermissions) {
    super(allowedPermissions);
    this.authenticationService = new AuthenticationService();
  }
  
  /**
   * Get the tasks.
   */
  registerUser(req, res, next) {

    this.authenticationService.registerAndAuthenticate({ username: req.body.username, password: req.body.password })
      .then((data) => {
        res.json(data);
      }, (err) => {
        next(err);
      });
  }

  authenticate(req, res, next) {
    this.authenticationService.authenticate({ username: req.body.username, password: req.body.password })
      .then((data) => {
        res.json(data);
      }, (err) => {
        next(err);
      });
  }
}

var methods = [];
methods.push(new RouteObject(appConstants.post, "/api/authentication/register", "registerUser"));
methods.push(new RouteObject(appConstants.post, "/api/authentication/authenticate", "authenticate"));
module.exports = { "Controller": AuthenticationController, "methods": methods };