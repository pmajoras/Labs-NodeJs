"use strict";

var common = require("../../common");
var config = common.config;
var importTest = common.importTest;
common.mockgoose(common.mongoose);

describe("Prepare Tests", function () {
  before(function (done) {
    common.mongoose.connect(config.db.connectionString, function (err) {
      done();
    });
  });

  importTest("register-and-authenticate-tests", __dirname + '/register-and-authenticate-tests');
  importTest("authenticate-tests", __dirname + '/authenticate-tests');

  after(function (done) {
    common.mongoose.unmock(function (err) {
      done(err);
    });
  });
});





