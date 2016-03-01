'use strict';

describe('Controller: MainTodoCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var MainTodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainTodoCtrl = $controller('MainTodoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainTodoCtrl.awesomeThings.length).toBe(3);
  });
});
