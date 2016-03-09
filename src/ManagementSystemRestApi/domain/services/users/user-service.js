"use strict";
var BaseDomainService = require('../../base-domain-service');
var userSpecifications = require('./specs/user-specifications');

class UserService extends BaseDomainService {
  constructor() {
    super("user");
  }

  getSaveSpecifications() {
    let saveSpecifications = super.getSaveSpecifications();
    let mongoPromise = (filter) => {
      return this.findAll(filter);
    };

    saveSpecifications.push(new userSpecifications.UsernameMustBeAnEmailSpec("username", "O nome de usuário deve ser um e-mail válido.", 100));
    saveSpecifications.push(new userSpecifications.UsernameMustBeUnique("username", mongoPromise, "Já existe um usuário com o e-mail informado.", 100));
    saveSpecifications.push(new userSpecifications.PasswordMustHaveSixOrMoreCharsSpec());
    return saveSpecifications;
  }
}

module.exports = UserService;