(function() {
  'use strict';

  angular.module('common')
    .directive('errorMessage',
    function() {
      return {
        restrict: 'E',
        template: '<p ng-class="class" ng-if="showError"><i class="fa fa-exclamation-circle"></i>{{message}}</p>',
        scope: {
          showError: '=',
          message: '@',
          class: '@'
        },
        link: function(scope) {
          scope.class = scope.class || 'error-block';
        }
      };
    });
})();