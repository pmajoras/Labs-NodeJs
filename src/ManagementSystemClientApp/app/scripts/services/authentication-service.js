(function() {
  'use strict';

  angular.module('todoApp').service('authenticationService', function($http, $log, $rootScope, $q, appUrl, storageService, appEvents) {

    var KEY_TOKEN = '$AUTH_TOKEN';
    var USER_ID = '$AUTH_USER_ID';
    var authenticateUrl = appUrl.api + 'authentication/authenticate';

    var setRootScopeAuthentication = function(isAuthenticated) {
      $rootScope.isAuthenticated = isAuthenticated === true;
      $rootScope.$broadcast(appEvents.USER_AUTH_CHANGED);
    };

    /**
     * Remove the current token from storageService.
     */
    var invalidateToken = function() {
      storageService.remove(KEY_TOKEN);
    };

    var authenticate = function(username, password) {
      var deferred = $q.defer();

      $http.post(authenticateUrl, { username: username, password: password })
        .then(function(response) {
          var data = response.data;
          if (!data.success) {
            data.message = 'Usuário e/ou senha inválidos.';
          }
          else {
            storageService.set(KEY_TOKEN, data.token);
            storageService.set(USER_ID, data.id);
            setRootScopeAuthentication(true);
          }

          deferred.resolve(data);
        }, function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    var checkCurrentAuthentication = function() {
      if (storageService.get(KEY_TOKEN)) {
        return true;
      }
      else {
        return false;
      }
    };

    var reAuthenticate = function() {

    };

    /**
     * Removes the current authentication token.
     */
    var removeAuthentication = function() {
      invalidateToken();
      setRootScopeAuthentication(false);

      return $q.when();
    };

    return {
      removeAuthentication: removeAuthentication,
      authenticate: authenticate,
      checkCurrentAuthentication: checkCurrentAuthentication,
      reAuthenticate: reAuthenticate,
    };
  });
})();