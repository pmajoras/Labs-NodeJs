"use strict";

var Q = require('q');
var specService = require('../specification/spec-service');

class BaseDomainService {
  /**
  * @param {string} repositoryName - The name of the repository that this service will use.
  * @param {string} requirePath - The base path to require the repository, not necessary.
  */
  constructor(repositoryName, requirePath) {
    var repositoryPath = requirePath || '../infrastructure/repositories/';
    let RepositoryClass = require(repositoryPath + repositoryName + "-repository");
    this.repository = new RepositoryClass();
  }

  /**
  * @param {Object} id - The id.
  * @returns {Promise}
  */
  findById(id) {
    return this.repository.findById(id);
  }

  /**
  * @param {Object} params - Find one by the specified params.
  * @param {boolean} lean - If true returns only the plain Json object.
  * @returns {Promise}
  */
  findOne(params, lean) {
    return this.repository.findOne(params, lean);
  }

  /**
  * @param {Object} params - Find all with the specified params.
  * @param {boolean} params - If true returns only the plain Json object.
  * @returns {Promise}
  */
  findAll(params, lean) {
    return this.repository.findAll(params, lean);
  }

  /**
  * @param {Object} entity - The entity to be created or updated.
  * @returns {Promise} - The saved entity.
  */
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

  /**
  * @param {Object} entity - The entity to be deleted.
  * @returns {Promise}
  */
  delete(entity) {
    return this.repository.delete(entity);
  }

  /**
  * @returns {Array} - An array of the save specifications.
  */
  getSaveSpecifications() {
    return [];
  }
}

module.exports = BaseDomainService;