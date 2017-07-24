(function(angular) {
  'use strict';
  angular.module('app').config(landingHomeRoute);
  landingHomeRoute.$inject = ['$stateProvider'];

  function landingHomeRoute($stateProvider) {
    $stateProvider.state('landing.home', {
      url: '/',
      templateUrl: '/view/modules/landing/home/home.html',
      controller: 'LandingHomeController',
      controllerAs: 'vm',
      data: {
        title: 'test task'
      },
      params: {
        targetSectionName: 'main'
      }
    });
  }
})(angular);
