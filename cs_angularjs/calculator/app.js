
var calcApp = angular.module('calculator', []);
calcApp.controller('calcCtrl', function($scope){
  $scope.sum = function () {
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
