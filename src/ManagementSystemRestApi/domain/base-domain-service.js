"use strict";

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
    return this.repository.save(entity);
  }

  update(entity) {
    return this.repository.update(entity);
  }

  Delete(entity) {
    return this.repository.delete(entity);
  }
}

module.exports = BaseDomainService;