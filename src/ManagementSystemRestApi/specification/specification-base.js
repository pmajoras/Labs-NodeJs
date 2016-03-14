"use strict";
var Q = require('q');

class SpecificationBase {
  constructor(isSatisfiedPromiseOrFunction) {
    this.notSatisfiedReason = "";
    this.errorCode = null;
    this.isSatisfiedFunction = isSatisfiedPromiseOrFunction;
  }

  /**
   * @param {JSON} target - The target that will be test to be satisfied.
   * @returns {Promise} Returns a promise with the result.
   */
  isSatisfiedBy(target) {
    return Q(this.isSatisfiedFunction(target));
  }
}

module.exports = SpecificationBase;