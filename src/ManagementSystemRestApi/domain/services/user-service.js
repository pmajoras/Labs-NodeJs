"use strict";
var BaseDomainService = require('../base-domain-service');

class UserService extends BaseDomainService {
  constructor() {
    super("user");
  }
}

module.exports = UserService;