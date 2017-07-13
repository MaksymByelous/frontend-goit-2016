(function(angular) {
  'use strict';
  angular.module('app').controller('LandingLoginController', LandingLoginController);

  LandingLoginController.$inject = ['$stateParams', '$scope', '$rootScope', '$state', 'LoginService'];
  function LandingLoginController($scope, $rootScope, $stateParams, $state, LoginService) {
    var vm = this;

    vm.formSubmit = formSubmit;

    function formSubmit() {
      if(LoginService.login(vm.username, vm.password)) {
        vm.error = '';
        vm.username = '';
        vm.password = '';
        $state.transitionTo('landing.home');
      } else {
        vm.error = "Incorrect username/password !";
      }
    }

  }
})(angular);
