"use strict";

var common = require("../common");
var importTest = common.importTest;

describe("Prepare Generic Specifications Tests", function() {
  before(function() {
  });

  importTest("property-is-mongo-id-spec-test", __dirname + '/property-is-mongo-id-spec-test');

  after(function() {
  });
});