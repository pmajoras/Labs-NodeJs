(function() {
  'use strict';

  angular.module('common')
    .directive('formEnter',
    function() {
      return {
        restrict: 'A',
        link: function(scope, element) {
          element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
              event.preventDefault();
              var fields = $(this).parents('form:eq(0),body').find('input, textarea, select, button');
              var index = fields.index(this);
              if (index > -1 && (index + 1) < fields.length) {
                fields.eq(index + 1).focus();
              }
            }
          });
        }
      };
    });
})();