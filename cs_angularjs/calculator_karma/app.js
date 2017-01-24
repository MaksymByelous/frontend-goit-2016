
var calcApp = angular.module('calculator', [])
.controller('calcCtrl', function($scope){
  $scope.sum = function (num1, num2) {
    $scope.result = parseFloat($scope.num1) + parseFloat($scope.num2);
  };
  $scope.mult = function () {
    $scope.result = parseFloat($scope.num1) * parseFloat($scope.num2);
  };
  $scope.minus = function () {
    $scope.result = parseFloat($scope.num1) - parseFloat($scope.num2);
  };
  $scope.div = function () {
    $scope.result = parseFloat($scope.num1) / parseFloat($scope.num2);
  };
});
