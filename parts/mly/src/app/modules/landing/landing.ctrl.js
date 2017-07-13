(function(angular) {
  'use strict';
  angular.module('app').controller('LandingController', LandingController);

  LandingController.$inject = ['$rootScope', '$location', '$state', 'LoginService'];
  function LandingController($rootScope, $location, $state, LoginService) {
    var main = this;

    if(!LoginService.isAuthenticated()) {
      $state.transitionTo('landing.login');
    }

  }

})(angular);
