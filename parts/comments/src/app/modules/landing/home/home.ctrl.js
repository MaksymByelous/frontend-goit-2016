(function (angular) {
  'use strict';
  angular.module('app').controller('LandingHomeController', LandingHomeController);


  LandingHomeController.$inject = ['$document', '$scope', '$window', 'WindowEventsService',
    'HomeService', '$stateParams', '$timeout', 'storage', '$cookies', '$rootScope'];
  function LandingHomeController($document, $scope, $window, WindowEventsService,
                                 HomeService, $stateParams, $timeout, storage, $cookies, $rootScope) {
    var vm = this;

    vm.inputTopic = '';
    vm.activeTopicIndex = 0;
    vm.topics = JSON.parse(storage.get('topics')) || [];
    vm.addTopic = addTopic;
    vm.delTopic = delTopic;
    vm.createTopic = createTopic;
    vm.addComment = addComment;

    function createTopic() {
      vm.newTopic = {'topic': vm.inputTopic, 'comments': []};
    }

    function addTopic() {
      vm.createTopic();
      vm.topics.push(vm.newTopic);
      storage.set('topics', JSON.stringify(vm.topics));
    }

    function delTopic(index) {
      vm.topics.splice(index, 1);
      storage.set('topics', JSON.stringify(vm.topics));
    }

    function addComment() {
       vm.topics[vm.activeTopicIndex].comments.push(vm.newComment);
       storage.set('topics', JSON.stringify(vm.topics));
    }

  }

})(angular);
