(function (angular) {
  "use strict";
  angular.module('app').factory('WindowEventsService', WindowEventsService);

  WindowEventsService.$inject = ['$window'];

  function WindowEventsService($window) {
    var api = {
      throttleTime: 100,
      listen: listen
    };

    //listener updates
    function listen(isOn, type, method, time) {

      //clean time, determine listener type
      var debounceTime = isNaN(time) ? api.throttleTime : time,
        listenerType = isOn ? 'addEventListener' : 'removeEventListener';

      //update throttled listener
      $window[listenerType](type, _.throttle(method, debounceTime));
    }

    //interface
    return api;
  }
})(angular);