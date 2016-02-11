"use strict";

class BaseRepository {
  constructor(modelName, requirePath) {
    var modelPath = requirePath || '../domain/entities/';
    this.Model = require(modelPath + modelName);
  }

  findById(id, cb) {
    this.Model.findOne({ _id: id }, function (err, entity) {
      if (!err && !entity) {
        err = true;
      }

      cb(err, entity);
    });
  }

  findOne(params, cb) {
    this.Model.findOne(params, function (err, entity) {
      if (!err && !entity) {
        err = true;
      }

      cb(err, entity);
    });
  }

  findAll(params, cb, lean) {
    if (!lean) {
      this.Model.find(params).exec(cb);
    } else {
      this.Model.find(params).lean().exec(cb);
    }
  }

  Save(entity, cb) {
    this.Model.create(entity, function (err, entity) {
      cb(err, entity);
    });
  }

  Update(entity, cb) {
    this.Model.findOneAndUpdate({ _id: entity._id }, entity, function (err, updatedEntity) {
      cb(err, updatedEntity);
    });
  }

  Delete(entity, cb) {
    this.Model.remove({ _id: entity._id }, function (err) {
      cb(err);
    });
  }
}

module.exports = BaseRepository;