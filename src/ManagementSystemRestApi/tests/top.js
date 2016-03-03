"use strict";
var common = require(__dirname + '/common');
var importTest = common.importTest;

describe("All Tests", function () {

  before(function () {
  });

  importTest("authentication-service-test", __dirname + '/application-services/authentication-service-tests/config-tests');

  after(function () {
  });
});