(function(angular) {
  'use strict';
  angular.module('app').config(landingRoute);
  landingRoute.$inject = ['$stateProvider'];

  function landingRoute($stateProvider) {
    $stateProvider.state('landing', {
      abstract: true,
      templateUrl: '/view/modules/landing/landing.html',
      controller: 'LandingController',
      controllerAs: 'vm'

    });
  }
})(angular);
