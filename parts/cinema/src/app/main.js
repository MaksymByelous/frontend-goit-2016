(function(angular) {
  'use strict';
  angular.module('app', [
    'app.config',
    'ngCookies',
    'ui.bootstrap',
    'ui.router',
    'ngSanitize',
    'ngResource',
    'ngAnimate',
    'ngMessages',
    'ngMap',
    'angular-loading-bar',
    'ngTouch',
    'angular-carousel',
    'ngMaterial',
    'duScroll',
    'angular-underscore'
  ])
    .value('duScrollDuration', 1000)
    .value('duScrollOffset', 100)
    .value('duScrollActiveClass', 'active-slide')
    // .value('duScrollEasing', invertedEasingFunction)
    .config(configure)
    .run(runBlock);

  configure.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider', '$sceProvider'];

  function configure($urlRouterProvider, $locationProvider, $httpProvider, $sceProvider) {
    $httpProvider.defaults.withCredentials = true;
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $urlRouterProvider.otherwise('/404');
    $sceProvider.enabled(false);
  }

  runBlock.$inject = ['$rootScope','$state'];

  function runBlock($rootScope, $state) {
    // $rootScope.$on('close-modals', function () {
    //   $uibModalStack.dismissAll();
    // });
    $rootScope.canonical = '/';
    $rootScope.$state = $state;
    $rootScope.$on('$stateChangeError', function(error) {
      console.log(error);
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
      $rootScope.pageTitle = toState.data && toState.data.title ? toState.data.title : 'test task';
      angular.element('body').scrollTop(0);
    });
    $rootScope.broadcastScrollEvent = function () {
      $rootScope.$broadcast('scroll');
    };
  }
})(angular);
