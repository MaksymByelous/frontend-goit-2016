
var calcApp = angular.module('calculator', ['myService']);
calcApp.controller('calcCtrl', function($scope, calcService){
    $scope.result = 0;
    $scope.sum = function (a,b) {
      $scope.result = calcService.sum(a,b);
    };
    $scope.mult =  function (a,b) {
      $scope.result = calcService.mult(a,b);
    };
    $scope.minus =  function (a,b) {
      $scope.result = calcService.minus(a,b);
    }
    $scope.div =  function (a,b) {
      $scope.result = calcService.div(a,b);
    };

});
