(function () {
  'use strict';

  angular.module('todoApp')
    .service('authenticationService', function ($http, $log, $rootScope, $q, appUrl) {
      console.log($http);
      console.log($q);
      console.log($log);
      console.log($rootScope);
      console.log(appUrl);

      return {

        "teste": "teste"
      };
    });
})();