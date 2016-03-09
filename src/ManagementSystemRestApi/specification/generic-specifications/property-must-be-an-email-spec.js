"use strict";
var validator = require('validator');
var SpecificationBase = require('../specification-base');

class PropertyMustBeAnEmailSpec extends SpecificationBase {
  constructor(propertyName, notSatisfiedReason, errorCode) {
    super((target) => {
      if (target && target[propertyName] && typeof target[propertyName] == 'string' && validator.isEmail(target[propertyName])) {
        return true;
      }

      this.notSatisfiedReason = notSatisfiedReason;
      this.errorCode = errorCode;
      return false;
    });
  }
}

module.exports = PropertyMustBeAnEmailSpec;