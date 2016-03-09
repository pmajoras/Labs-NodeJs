"use strict";
var SpecificationBase = require('../specification-base');
var Q = require('q');

class PropertyValueMustBeUniqueInMongoQuery extends SpecificationBase {
  constructor(propertyName, mongoPromise, notSatisfiedReason, errorCode) {

    super((target) => {
      let deferred = Q.defer();
      let filter = {};
      filter[propertyName] = target[propertyName];

      Q(mongoPromise(filter)).then((entities) => {
        let isSatisfied = !entities || entities.length === 0;
        if (!isSatisfied) {
          this.notSatisfiedReason = notSatisfiedReason;
          this.errorCode = errorCode;
        }
        deferred.resolve(isSatisfied);
      }, (err) => {
        deferred.reject(err);
      });

      return deferred.promise;
    });
  }
}

module.exports = PropertyValueMustBeUniqueInMongoQuery;