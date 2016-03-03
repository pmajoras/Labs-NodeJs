"use strict";

var RouteFactory = require('../route-factory');
var UserService = require('../../domain/services/user-service');
var BaseController = require('../base-controller');

class UserController extends BaseController {
  constructor() {
    super();
    this.userService = new UserService();
  }
  
  /**
   * Get the tasks.
   */
  getUsers(req, res, next) {
    this.userService.findAll({}, true)
      .then((data) => {
        res.setJsonResponse(data);
        next();
      }, (err) => {
        next(err);
      });
  }
}

var routeFactory = new RouteFactory("/api/users")
  .get("", "getUsers");

module.exports = { "Controller": UserController, "routeFactory": routeFactory };