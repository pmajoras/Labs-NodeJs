"use strict";

var Q = require('q');
var specService = require('../specification/spec-service');

class BaseDomainService {
  constructor(repositoryName, requirePath) {
    var repositoryPath = requirePath || '../infrastructure/repositories/';
    let RepositoryClass = require(repositoryPath + repositoryName + "-repository");
    this.repository = new RepositoryClass();
  }

  findById(id) {
    return this.repository.findById(id);
  }

  findOne(params, lean) {
    return this.repository.findOne(params, lean);
  }

  findAll(params, lean) {
    return this.repository.findAll(params, lean);
  }

  save(entity) {
    let deferred = Q.defer();

    specService.getErrorFromNotSatisfiedSpecifications(this.getSaveSpecifications(), entity)
      .then((notSatisfiedSpecsErrors) => {

        if (!notSatisfiedSpecsErrors) {

          if (!entity._id) {
            this.repository.save(entity)
              .then((newEntity) => {
                deferred.resolve(newEntity);
              }, (err) => {
                deferred.reject(err);
              });
          }
          else {
            this.repository.update(entity)
              .then((updatedEntity) => {
                deferred.resolve(updatedEntity);
              }, (err) => {
                deferred.reject(err);
              });
          }
        }
        else {
          deferred.reject(notSatisfiedSpecsErrors);
        }
      }, (err) => {
        deferred.reject(err);
      });

    return deferred.promise;
  }

  delete(entity) {
    return this.repository.delete(entity);
  }

  getSaveSpecifications() {
    return [];
  }
}

module.exports = BaseDomainService;