"use strict";
var BaseDomainService = require('../../base-domain-service');

class BoardService extends BaseDomainService {
  constructor() {
    super("board");
  }

  /**
  * @returns {Array} - An array of the save specifications.
  */
  getSaveSpecifications() {
    let saveSpecifications = super.getSaveSpecifications();
    return saveSpecifications;
  }
}

module.exports = BoardService;