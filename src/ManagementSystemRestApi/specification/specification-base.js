"use strict";
var Q = require('q');

class SpecificationBase {
  constructor(isSatisfiedPromiseOrFunction) {
    this.notSatisfiedReason = "";
    this.errorCode = null;
    this.isSatisfiedFunction = isSatisfiedPromiseOrFunction;
  }

  isSatisfiedBy(target) {
    return Q(this.isSatisfiedFunction(target));
  }
}

module.exports = SpecificationBase;