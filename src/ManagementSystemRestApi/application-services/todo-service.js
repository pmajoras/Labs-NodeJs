"use strict";
var UserService = require('../domain/services/users/user-service');
var BoardService = require('../domain/services/boards/board-service');

class TodoService {
  constructor() {
    this.userService = new UserService();
    this.boardService = new BoardService();
  }

  /**
  * @param {Object} id - The user id.
  * @returns {Promise}
  */
  getBoardsByUserId(id) {
    return this.boardService.findAll({ owner: id }, true);
  }
}

module.exports = TodoService;