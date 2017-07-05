(function(angular) {
  'use strict';
  angular.module('app').config(landingEventRoute);
  landingEventRoute.$inject = ['$stateProvider'];

  function landingEventRoute($stateProvider) {
    $stateProvider.state('landing.event', {
      url: '/page2/:eventIndex',
      templateUrl: '/view/modules/landing/event/event.html',
      controller: 'LandingEventController',
      controllerAs: 'vm',
      data: {
        title: 'event'
      }
    });
  }
})(angular);
