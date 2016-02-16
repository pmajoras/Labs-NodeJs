var assert = require('assert');
var mongoose = require('mongoose');
var config = require('../config/config');
var mockgoose = require('mockgoose');
mockgoose(mongoose);

before(function (done) {
  mongoose.connect(config.db.connectionString, function (err) {
    done(err);
  });
});

describe('String#split', function () {
  it("should return an array", function () {
     assert(Array.isArray('a,b,c'.split(',')));
  });
});