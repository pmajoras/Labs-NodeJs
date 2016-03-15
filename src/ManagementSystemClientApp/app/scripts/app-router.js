(function() {
  'use strict';

  var app = window.app || angular.module('todoApp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ui.bootstrap.showErrors'
  ]);

  app.config(function($stateProvider, $urlRouterProvider, appUrl) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      // Main
      .state('home', {
        url: '/',
        templateUrl: appUrl.views + 'home.html',
        controller: 'MainCtrl',
      })
      // Admin
      .state('login', {
        url: '/Login',
        templateUrl: appUrl.views + 'account/login.html',
        controller: 'LoginCtrl'
      })
      // Todo App
      .state('todo', {
        url: '/Todo',
        templateUrl: appUrl.views + 'todo/main-todo.html',
        controller: 'MainTodoCtrl',
        data: { authenticate: true }
      })
      // Admin
      .state('admin', {
        url: '/Admin',
        templateUrl: appUrl.views + 'admin/main-admin.html',
        controller: 'MainAdminCtrl',
        data: { authenticate: true }
      });
  });

  window.app = app;
})();