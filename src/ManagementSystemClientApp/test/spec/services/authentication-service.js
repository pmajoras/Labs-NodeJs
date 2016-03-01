'use strict';

describe('Service: authenticationService', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var target;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (authenticationService) {    
    target = authenticationService;
  }));

  it('should logoff', function () {
  });
});
