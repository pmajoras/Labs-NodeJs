(function() {
  'use strict';

  angular.module('todoApp').service('authenticationService', function($http, $log, $rootScope, $q, appUrl, storageService, appEvents) {

    var KEY_TOKEN = '$AUTH_TOKEN';

    /**
     * Remove the current token from storageService.
     */
    var invalidateToken = function() {
      storageService.remove(KEY_TOKEN);
    };

    var authenticate = function() {

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
      $rootScope.isAuthenticated = false;
      $rootScope.$broadcast(appEvents.USER_AUTH_CHANGED);

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