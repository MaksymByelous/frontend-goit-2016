(function(angular) {
  'use strict';
  angular.module('app').config(landingPage3Route);
  landingPage3Route.$inject = ['$stateProvider'];

  function landingPage3Route($stateProvider) {
    $stateProvider.state('landing.page3', {
      url: '/page3',
      templateUrl: '/view/modules/landing/page3/page3.html',
      controller: 'LandingPage3Controller',
      controllerAs: 'vm',
      data: {
        title: 'page 3'
      }
    });
  }
})(angular);
