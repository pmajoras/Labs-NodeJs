"use strict";
var UserService = require('../domain/services/users/user-service');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var appConstants = require('../config/app-constants');
var Q = require('q');

class AuthenticationService {
  constructor() {
    this.userService = new UserService();
  }

  _createToken(username, id) {
    return jwt.sign({ username: username, _id: id, permissions: [appConstants.mustBeAuthenticatedPermission] }, config.secret, {
      expiresIn: "1h" // expires in 1 hour
    });
  }

  registerAndAuthenticate(userViewModel) {
    let deferred = Q.defer();
    this.userService.save(userViewModel)
      .then((newEntity) => {
        // create a token
        let token = this._createToken(newEntity.username, newEntity._id);
        deferred.resolve({ success: true, token: token, id: newEntity._id });
      }, (err) => {
        deferred.reject(err);
      });

    return deferred.promise;
  }

  /** 
   * 
  */
  authenticate(userViewModel) {
    let deferred = Q.defer();

    this.userService.findOne({ username: userViewModel.username, password: userViewModel.password })
      .then((user) => {

        if (user) {
          // create a token
          let token = this._createToken(user.username, user._id);
          deferred.resolve({ success: true, token: token, id: user._id });
        } else {
          deferred.resolve({ success: false, message: 'Invalid username or password.' });
        }
      }, (error) => {
        deferred.reject(error);
      });

    return deferred.promise;
  }
}

module.exports = AuthenticationService;