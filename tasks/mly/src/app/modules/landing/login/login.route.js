
(function(angular) {
  'use strict';
  angular.module('app').config(landingLoginRoute);
  landingLoginRoute.$inject = ['$stateProvider'];

  function landingLoginRoute($stateProvider) {
    $stateProvider.state('landing.login', {
      url: '/login',
      templateUrl: '/view/modules/landing/login/login.html',
      controller: 'LandingLoginController',
      controllerAs: 'vm',
      data: {
        title: 'login'
      }
    });
  }
})(angular);
