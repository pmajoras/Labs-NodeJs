"use strict";
var UserService = require('../domain/services/users/user-service');
var BoardService = require('../domain/services/boards/board-service');
var Q = require("q");

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
    let deferred = Q.defer();

    this.userService.findById(id)
      .then((user) => {
        let boardIds = user.boards || [];
        this.boardService.findAll({ owner: { $in: boardIds } }, true)
          .then((boards) => {
            deferred.resolve(boards);
          }, (err) => {
            deferred.reject(err);
          });
      }, (err) => {
        deferred.reject(err);
      });

    return deferred.promise;
  }
}

module.exports = TodoService;