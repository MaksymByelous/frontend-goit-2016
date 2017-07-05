(function(angular) {
  'use strict';
  angular.module('app').controller('LandingEventController', LandingEventController);

  LandingEventController.$inject = ['$stateParams', 'HomeService'];
  function LandingEventController($stateParams, HomeService) {
    var vm = this;

    vm.eventIndex = $stateParams.eventIndex;
    vm.news = HomeService.news;
    vm.event = vm.news[vm.eventIndex];
  }
})(angular);
