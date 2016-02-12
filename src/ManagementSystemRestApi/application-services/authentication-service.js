"use strict";
var UserService = require('../domain/services/user-service');
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

    this.userService.findOne({ username: userViewModel.username })
      .then((user) => {

        if (!user) {

          if (userViewModel.password && typeof userViewModel.password === "string" && userViewModel.password.length >= 6) {
            this.userService.save(userViewModel)
              .then((newEntity) => {
                          
                // create a token
                let token = this._createToken(newEntity.username, newEntity._id);
                deferred.resolve({ success: true, token: token });
              }, (error) => {
                deferred.reject(error);
              });
          }
          else {
            deferred.resolve({ success: false, message: 'The password must have at least 6 characters.' });
          }
        } else {
          deferred.resolve({ success: false, message: 'There is already a user with this username.' });
        }
      }, (error) => {
        deferred.reject(error);
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
          deferred.resolve({ success: true, token: token });
        } else {
          deferred.resolve({ success: false, message: 'Invalid username or passowrd.' });
        }
      }, (error) => {
        deferred.reject(error);
      });

    return deferred.promise;
  }
}

module.exports = AuthenticationService;