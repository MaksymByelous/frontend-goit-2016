(function (angular) {
  'use strict';
  angular.module('app').controller('LandingHomeController', LandingHomeController);


  LandingHomeController.$inject = ['$document', '$scope', '$window', 'WindowEventsService',
    'HomeService', '$stateParams', '$timeout'];
  function LandingHomeController($document, $scope, $window, WindowEventsService,
                                 HomeService, $stateParams, $timeout) {
    var vm = this;

    vm.winner = '....';
    vm.findWinner = findWinner;
    vm.registered = [ {name: 'max', surname: 'bels', email: 'mymail', phone: 6565656},
                      {name: 'ljlk', surname: 'bels', email: 'mymail', phone: 656554656}];
    vm.formData = {};
    vm.addRegistered = addRegistered;
    vm.checkDulication = checkDulication;
    vm.duplication = false;
    vm.deleteRegistered = deleteRegistered;

    function addRegistered() {
      if(vm.checkDulication()) {
        alert('you are already registered');
      } else {
        vm.new = angular.copy(vm.formData);
        vm.registered.push(vm.new);
        alert('Data sent!');
      }
    }

    function findWinner() {
      vm.winnerObj = vm.registered[Math.floor((Math.random() * (vm.registered.length)) + 0)];
      vm.winner = vm.winnerObj.name + ' ' + vm.winnerObj.surname + ' ' + vm.winnerObj.email;
    }

    function checkDulication() {
      vm.registeredQuantity = vm.registered.length;
      for (var i = 0; i < vm.registeredQuantity; i++) {
        if(vm.registered[i].name === vm.formData.name && vm.registered[i].surname === vm.formData.surname && vm.registered[i].email === vm.formData.email) {
          vm.duplication = true;
        } else {
          vm.duplication = false;
        }
      }
      return vm.duplication;
    }

    function deleteRegistered(index) {
      vm.registered.splice(index, 1);
    }

  }

})(angular);
