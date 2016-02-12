"use strict";
var RouteObject = require('../route-object');
var appConstants = require('../../config/app-constants');
var BaseController = require('../base-controller');

class TaskController extends BaseController {
  constructor(allowedPermissions) {
    super(allowedPermissions);
  }
  
  /**
   * Get the tasks.
   */
  getTasks(req, res) {
    res.json({ message: 'hooray! welcome to our Tasks!' });
  }
  /**
   * Insert a new task
   */
  insertTask() {

  }
}

var methods = [];
methods.push(new RouteObject(appConstants.get, "/api/tasks", "getTasks", [appConstants.mustBeAuthenticatedPermission]));
module.exports = { "Controller": TaskController, "methods": methods };