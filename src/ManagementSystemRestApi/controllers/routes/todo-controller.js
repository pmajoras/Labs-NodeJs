"use strict";
var RouteFactory = require('../route-factory');
var BaseController = require('../base-controller');
var mustAuthorizeWithId = require('../../middlewares/general-middlewares/must-authorize-with-id');
var TodoService = require('../../application-services/todo-service');

class TodoController extends BaseController {
  constructor() {
    super();
    this.todoService = new TodoService();
  }

  getBoards(req, res, next) {
    this.todoService.getBoardsByUserId(req.params.id)
      .then((boards) => {
        res.setJsonResponse(boards);
        next();
      }, (err) => {
        next(err);
      });
  }
}

var routeFactory = new RouteFactory("/api/todo/:id/")
  .get("boards", "getBoards", mustAuthorizeWithId);

module.exports = { "Controller": TodoController, "routeFactory": routeFactory };