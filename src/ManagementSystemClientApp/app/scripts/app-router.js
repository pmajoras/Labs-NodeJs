(function () {
  'use strict';

  var app = window.app || angular.module('todoApp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate'
  ]);

  app.config(function ($stateProvider, $urlRouterProvider, appUrl) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    // Main
      .state('home', {
        url: '/',
        templateUrl: appUrl.views + 'home.html',
        controller: 'MainCtrl'
      })
    // Todo App
      .state('todo', {
        url: '/Todo',
        templateUrl: appUrl.views + 'todo/main.html',
        controller: 'MainTodoCtrl'
      });
  });

  window.app = app;
})();