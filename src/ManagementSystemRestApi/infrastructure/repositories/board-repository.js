"use strict";
var BaseRepository = require('../base-repository');

class BoardRepository extends BaseRepository {
  constructor() {
    super("user");
  }
}

module.exports = BoardRepository;