angular.module('app').directive('onScroll', function($timeout) {
  'use strict';

  return {
    scope: {
      onScroll: '&onScroll',
    },
    link: function(scope, element) {
      var scrollDelay = 250,
        scrollThrottleTimeout,
        throttled = false,
        scrollHandler = function() {
          if (!throttled) {
            scope.onScroll();
            throttled = true;
            scrollThrottleTimeout = $timeout(function(){
              throttled = false;
            }, scrollDelay);
          }
        };

      element.on("scroll", scrollHandler);

      scope.$on('$destroy', function() {
        element.off('scroll', scrollHandler);
      });
    }
  };
});
