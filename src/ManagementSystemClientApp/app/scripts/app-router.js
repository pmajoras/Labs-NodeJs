(function () {
  'use strict';

  var app = window.app || angular.module('todoApp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate'
  ]);

  app.config(function ($stateProvider, $urlRouterProvider, appUrl) {
    console.log($stateProvider);
    console.log($urlRouterProvider);
    console.log(appUrl);
  });

  window.app = app;
})();