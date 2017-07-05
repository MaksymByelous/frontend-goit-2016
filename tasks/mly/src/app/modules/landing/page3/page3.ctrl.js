(function(angular) {
  'use strict';
  angular.module('app').controller('LandingPage3Controller', LandingPage3Controller);

  LandingPage3Controller.$inject = ['$document', 'WindowEventsService', '$window', '$scope', '$timeout',
  'TeamService', '$stateParams'];
  function LandingPage3Controller($document, WindowEventsService, $window, $scope, $timeout,
     TeamService, $stateParams) {
    var vm = this;

    vm.scrollY = 0;
    vm.menuIsOpen = false;
    vm.toggleMobileMenu = toggleMobileMenu;
    vm.scrollTo = scrollTo;
    vm.windowWidth = $window.innerWidth;
    vm.windowHeight = $window.innerHeight;
    vm.windowY = 0;
    vm.directors = TeamService.directors;
    vm.staff = TeamService.team;

    WindowEventsService.listen(true, 'scroll', defineScrollY);

    function defineScrollY() {
      vm.scrollY = $window.scrollY;
      $scope.$apply();
    }

    function scrollTo(sectionName) {
      $document.scrollToElementAnimated(vm.sections[sectionName].element);
    }

    function toggleMobileMenu() {
      vm.menuIsOpen = !vm.menuIsOpen;
    }

  }
})(angular);
