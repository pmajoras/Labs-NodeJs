"use strict";

module.exports = {
  PasswordMustHaveSixOrMoreCharsSpec: require('./password-must-have-six-or-more-chars-spec'),
  UsernameMustBeAnEmailSpec: require('../../../../specification/generic-specifications/property-must-be-an-email-spec'),
  UsernameMustBeUnique: require('../../../../specification/generic-specifications/property-value-must-be-unique-in-mongo-query')
};