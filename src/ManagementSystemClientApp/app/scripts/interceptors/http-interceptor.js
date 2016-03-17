(function() {
  'use strict';

  angular.module('common')
    .factory('httpInterceptor', function($injector) {

      return {
        'request': function(config) {
          [
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Methods'
          ].forEach(function(header) {
            config.headers[header] = '*';
          });

          return config;
        }
      };
    });
})();