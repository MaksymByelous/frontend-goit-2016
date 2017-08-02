(function(angular) {
  'use strict';
  angular.module('app').controller('LandingController', LandingController);

  LandingController.$inject = ['$document', '$scope', '$window', 'WindowEventsService', 'HomeService', '$stateParams', '$timeout', '$http', '$sce'];
  function LandingController($document, $scope, $window, WindowEventsService, HomeService, $stateParams, $timeout, $http, $sce) {
    var main = this;

  }

})(angular);
