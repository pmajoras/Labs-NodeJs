(function() {
  'use strict';

  angular.module('todoApp')
    .controller('LoginCtrl', function($scope, $state, authenticationService) {

      var login = function() {
        $scope.submittingForm = true;
        $scope.errors = [];

        authenticationService.authenticate($scope.loginRequest.username, $scope.loginRequest.password)
          .then(function(data) {
            if (data.success) {
              $state.go('home');
            }
            else {
              $scope.errors.push(data.message);
            }
          }, function(err) {
            $scope.errors.push('Ocorreu um erro no servidor durante o login. Favor tentar novamente.');
          })
          .finally(function() {
            $scope.submittingForm = false;
          });
      };

      var init = function() {
        $scope.login = login;
        $scope.submittingForm = false;
        $scope.errors = [];
      };

      init();
    });
})();