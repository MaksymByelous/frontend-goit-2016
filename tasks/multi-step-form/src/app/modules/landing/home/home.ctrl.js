(function (angular) {
  'use strict';
  angular.module('app').controller('LandingHomeController', LandingHomeController);


  LandingHomeController.$inject = ['$document', '$scope', '$window', 'WindowEventsService',
    'HomeService', '$stateParams', '$timeout'];
  function LandingHomeController($document, $scope, $window, WindowEventsService,
                                 HomeService, $stateParams, $timeout) {
    var vm = this;

    vm.scrollTo = scrollTo;


    function scrollTo(elementIndex) {
      $timeout(function () {
        $document.scrollToElementAnimated(vm.sections[elementIndex].element, 0);
      }, 100);
    }



  }

})(angular);
