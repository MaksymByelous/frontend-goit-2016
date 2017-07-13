(function (angular) {
  'use strict';
  angular.module('app').controller('LandingHomeController', LandingHomeController);


  LandingHomeController.$inject = ['$document', '$scope', '$window', 'WindowEventsService',
    'HomeService', '$stateParams', '$timeout', 'TeamService'];
  function LandingHomeController($document, $scope, $window, WindowEventsService,
                                 HomeService, $stateParams, $timeout, TeamService) {
    var vm = this;

    vm.targetSectionName = $stateParams.targetSectionName;
    vm.menuIsOpen = false;
    vm.windowWidth = $window.innerWidth;
    vm.windowHeight = $window.innerHeight;
    vm.windowY = 0;
    vm.arrowDown = false;
    vm.activePage = 'main';
    vm.scrollTo = scrollTo;
    vm.sections = {
      0: {element: angular.element(document.getElementById('main')), name: 'main'},
      1: {element: angular.element(document.getElementById('about')), name: 'about'},
    };

    vm.arrows = [
      {section: 0, direction: 1},
    ];

    vm.toggleMobileMenu = toggleMobileMenu;
    vm.getElementsHeight = getElementsHeight;

    vm.toggleActivePage = toggleActivePage;

    function toggleActivePage(activePage) {
      vm.activePage = 'activePage';
    }

    if (vm.targetSectionName) {
      angular.forEach(vm.sections, function (section, sectionId) {
        if (vm.targetSectionName == section.name) {
          vm.targetSectionId = sectionId;
        }
      });
      vm.scrollTo(vm.targetSectionId);
    }

    function toggleMobileMenu() {
      vm.menuIsOpen = !vm.menuIsOpen;
    }

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
