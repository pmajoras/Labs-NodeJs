(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name wwwApp
   * @description
   * # wwwApp
   *
   * Main module of the application.
   */
  var app = window.app || angular
    .module('todoApp', [
      'ui.router',
      'ui.bootstrap',
      'ngAnimate'
    ]);

  app.constant('appUrl', {
    views: 'http://localhost:8089/views/',
    api: 'http://localhost/PGPApi/api/'
  });

  app.constant('appEvents', {
    USER_AUTH_CHANGED: '$EV_USER_CHANGED',
  });

  app.run(function ($log, $rootScope, $state) {
    $rootScope.currentState = $state;
    $rootScope.isAuthenticated = false;

    $rootScope.$on('$stateChangeStart', function (event, toState) {
      if (toState.data && toState.data.authenticate === true) {

      }
      $rootScope.currentState = toState;
    });
  });

  window.app = app;
})();