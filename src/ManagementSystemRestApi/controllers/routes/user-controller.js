"use strict";

var RouteObject = require('../route-object');
var UserService = require('../../domain/services/user-service');
var appConstants = require('../../config/app-constants');
var BaseController = require('../base-controller');

class UserController extends BaseController {
  constructor(allowedPermissions) {
    super(allowedPermissions);
    this.userService = new UserService();
  }
  
  /**
   * Get the tasks.
   */
  getUsers(req, res, next) {
    this.userService.findAll({}, true)
      .then((data) => {
        res.json(data);
      }, (err) => {
        next(err);
      });
  }
}

var methods = [];
methods.push(new RouteObject(appConstants.get, "/api/users", "getUsers", [appConstants.mustBeAuthenticatedPermission]));
module.exports = { "Controller": UserController, "methods": methods };