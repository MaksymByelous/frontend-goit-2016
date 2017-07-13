(function(angular) {
  'use strict';
  angular.module('app').config(landingPage2Route);
  landingPage2Route.$inject = ['$stateProvider'];

  function landingPage2Route($stateProvider) {
    $stateProvider.state('landing.page2', {
      url: '/page2',
      templateUrl: '/view/modules/landing/page2/page2.html',
      controller: 'LandingPage2Controller',
      controllerAs: 'vm',
      data: {
        title: 'page 2'
      }
    });
  }
})(angular);
