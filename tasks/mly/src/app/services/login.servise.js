(function (angular) {
  "use strict";
  angular.module('app').factory('LoginService', LoginService);

  function LoginService() {
    var admin = 'admin';
    var pass = 'pass';
    var isAuthenticated = false;

    return {
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;
        return isAuthenticated;
        console.log('isAuthenticated: ', isAuthenticated);
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
  }
})(angular);
