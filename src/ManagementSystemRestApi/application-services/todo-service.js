"use strict";
var UserService = require('../domain/services/users/user-service');
var Q = require("q");

class TodoService {
  constructor() {
    this.userService = new UserService();
  }

  /**
  * @param {Object} id - The user id.
  * @returns {Promise}
  */
  getBoardsByUserId(id) {
    let deferred = Q.defer();

    this.userService.findById(id, "boards", true)
      .then((user) => {
        let boards = user.boards || [];
        deferred.resolve(boards);
      }, (err) => {
        deferred.reject(err);
      });

    return deferred.promise;
  }
}

module.exports = TodoService;