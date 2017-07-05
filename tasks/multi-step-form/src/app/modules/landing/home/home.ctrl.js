(function (angular) {
  'use strict';
  angular.module('app').controller('LandingHomeController', LandingHomeController);


  LandingHomeController.$inject = ['$document', '$scope', '$window', 'WindowEventsService',
    'HomeService', '$stateParams', '$timeout', 'TeamService'];
  function LandingHomeController($document, $scope, $window, WindowEventsService,
                                 HomeService, $stateParams, $timeout, TeamService) {
    var vm = this;

    vm.scrollTo = scrollTo;


    function scrollTo(elementIndex) {
      $timeout(function () {
        $document.scrollToElementAnimated(vm.sections[elementIndex].element, 0);
      }, 100);
    }

    function getElementsHeight() {
      vm.eventsGridHeight = angular.element(document.getElementById('events-grid'))[0].clientHeight;
    }

  }

})(angular);
