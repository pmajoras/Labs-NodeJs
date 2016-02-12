"use strict";
var Q = require('q');
var defaultPromiseCallback = function (err, data, deferred) {
  if (err) {
    deferred.reject(err);
  }
  else {
    deferred.resolve(data);
  }
};

class BaseRepository {
  constructor(modelName, requirePath) {
    var modelPath = requirePath || '../domain/entities/';
    this.Model = require(modelPath + modelName);
  }

  findById(id) {
    let deferred = Q.defer();

    this.Model.findOne({ _id: id }, function (err, entity) {
      defaultPromiseCallback(err, entity, deferred);
    });

    return deferred.promise;
  }

  findOne(params, lean) {
    let deferred = Q.defer();
    if (lean === true) {
      this.Model.findOne(params).lean().exec(function (err, entity) {
        defaultPromiseCallback(err, entity, deferred);
      });
    }
    else {
      this.Model.findOne(params, function (err, entity) {
        defaultPromiseCallback(err, entity, deferred);
      });
    }

    return deferred.promise;
  }

  findAll(params, lean) {
    let deferred = Q.defer();

    if (!lean) {
      this.Model.find(params).exec(function (err, entities) {
        defaultPromiseCallback(err, entities, deferred);
      });
    } else {
      this.Model.find(params).lean().exec(function (err, entities) {
        defaultPromiseCallback(err, entities, deferred);
      });
    }

    return deferred.promise;
  }

  save(entity) {
    let deferred = Q.defer();
    this.Model.create(entity, function (err, newEntity) {
      defaultPromiseCallback(err, newEntity, deferred);
    });
    return deferred.promise;
  }

  update(entity) {
    let deferred = Q.defer();

    this.Model.findOneAndUpdate({ _id: entity._id }, entity, function (err, updatedEntity) {
      defaultPromiseCallback(err, updatedEntity, deferred);
    });
    return deferred.promise;
  }

  delete(entity) {
    let deferred = Q.defer();
    this.Model.remove({ _id: entity._id }, function (err) {
      defaultPromiseCallback(err, null, deferred);
    });
    return deferred.promise;
  }
}

module.exports = BaseRepository;