"use strict";
var PropertyMustBeAnEmailSpec = require('../../../../specification/generic-specifications/property-must-be-an-email-spec');
var PropertyValueMustBeUniqueInMongoQuery = require('../../../../specification/generic-specifications/property-value-must-be-unique-in-mongo-query');
var PasswordMustHaveSixOrMoreCharsSpec = require('./password-must-have-six-or-more-chars-spec');

module.exports = {
  getPasswordMustHaveSixOrMoreCharsSpec: () => new PasswordMustHaveSixOrMoreCharsSpec(),
  getUsernameMustBeAnEmailSpec: () => new PropertyMustBeAnEmailSpec("username", "O nome de usuário deve ser um e-mail válido.", 100),
  getUsernameMustBeUniqueSpec: (mongoPromise) => new PropertyValueMustBeUniqueInMongoQuery("username", mongoPromise, "Já existe um usuário com o e-mail informado.", 100)
};