'use strict';

describe('Service: authenticationService', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var target;
  var appStorageService;
  var keyToken = '$AUTH_TOKEN';
  var rootScope;
  
  // Initialize the controller and a mock scope
  beforeEach(inject(function (authenticationService, storageService, $rootScope) {
    target = authenticationService;
    appStorageService = storageService;
    rootScope = $rootScope;
    
    // Must clear local storage before each test.
    appStorageService.clear();
  }));

  it('should remove authentication when authentication token is not null', function (done) {
    appStorageService.set(keyToken, '123');

    target.removeAuthentication()
      .then(function () {
        expect(appStorageService.get(keyToken)).toBe(null);
        done();
      }, function () {
        fail("do called error callback but should not.");
      });
    
    // Must apply for the promises be resolved.  
    rootScope.$apply();
  });

  it('should remove authentication when authentication token is null', function (done) {

    target.removeAuthentication()
      .then(function () {
        expect(appStorageService.get(keyToken)).toBe(null);
        done();
      }, function () {
        fail("do called error callback but should not.");
      });
    
    // Must apply for the promises be resolved.  
    rootScope.$apply();
  });
});
