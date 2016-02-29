(function () {
  'use strict';

  angular.module('todoApp')
    .config(function ($stateProvider, $urlRouterProvider, appUrl) {
      console.log($stateProvider);
      console.log($urlRouterProvider);
      console.log(appUrl);
    });
})();