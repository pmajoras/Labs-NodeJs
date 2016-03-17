(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name wwwApp
   * @description
   * # wwwApp
   *
   * Main module of the application.
   */
  var common = angular.module('common', []);
  console.log(common);

  var app = window.app || angular
    .module('todoApp', [
      'ui.router',
      'ui.bootstrap',
      'ngAnimate',
      'ui.bootstrap.showErrors',
      'common'
    ]);

  app.constant('appUrl', {
    views: 'http://localhost:8089/views/',
    api: 'http://localhost:8080/api/'
  });

  app.constant('appEvents', {
    USER_AUTH_CHANGED: '$EV_USER_CHANGED',
  });

  app.config(['$httpProvider', function($httpProvider) {
    var interceptors = $httpProvider.interceptors;
    interceptors.push('httpInterceptor');
  }]);

  app.run(function($log, $rootScope, $state, authenticationService) {
    $rootScope.currentState = $state.name;
    $rootScope.isAuthenticated = authenticationService.checkCurrentAuthentication();

    $rootScope.$on('$stateChangeStart', function(event, toState) {
      if (toState.data && toState.data.authenticate === true) {

        if (!authenticationService.checkCurrentAuthentication()) {
          $rootScope.currentState = 'login';
          $state.go('login');
          event.preventDefault();
          return;
        }
      }
      else if (toState.data && toState.data.notAuthenticatedOnly === true) {
        if (authenticationService.checkCurrentAuthentication()) {
          $rootScope.currentState = 'home';
          $state.go('home');
          event.preventDefault();
          return;
        }
      }
      $rootScope.currentState = toState.name;
    });
  });

  window.app = app;
})();