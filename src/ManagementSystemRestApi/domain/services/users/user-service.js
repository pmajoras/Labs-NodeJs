"use strict";
var BaseDomainService = require('../../base-domain-service');
var userSpecifications = require('./specs/user-specifications');

class UserService extends BaseDomainService {
  constructor() {
    super("user");
  }

  /**
  * @returns {Array} - An array of the save specifications.
  */
  getSaveSpecifications() {
    let saveSpecifications = super.getSaveSpecifications();
    let mongoPromise = (filter) => {
      return this.findAll(filter);
    };

    saveSpecifications.push(new userSpecifications.getUsernameMustBeAnEmailSpec());
    saveSpecifications.push(new userSpecifications.getUsernameMustBeUniqueSpec(mongoPromise));
    saveSpecifications.push(new userSpecifications.getPasswordMustHaveSixOrMoreCharsSpec());
    return saveSpecifications;
  }
}

module.exports = UserService;