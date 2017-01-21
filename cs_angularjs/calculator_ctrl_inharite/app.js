
var calcApp = angular.module('calculator', []);
  calcApp.controller('calcCtrl', function($scope){
    $scope.result = {output: '...enter nums and choose action'};
    $scope.sum = function () {
      $scope.result.output = parseFloat($scope.num1) + parseFloat($scope.num2);
      console.log('you done sum ' + $scope.num1 + ' ' + $scope.num2);
    };
  });
  calcApp.controller('calcCtrl2', function ($scope) {
    $scope.mult = function () {
      $scope.result.output = parseFloat($scope.num1) * parseFloat($scope.num2);
      console.log('you done mult ' + $scope.num1 + ' ' + $scope.num2);
    };
  });
  calcApp.controller('calcCtrl3', function ($scope) {
    $scope.minus = function () {
      $scope.result.output = parseFloat($scope.num1) - parseFloat($scope.num2);
      console.log('you done minus ' + $scope.num1 + ' ' + $scope.num2);
    };
  });
  calcApp.controller('calcCtrl4', function ($scope) {
    $scope.div = function () {
      $scope.result.output = parseFloat($scope.num1) / parseFloat($scope.num2);
      console.log('you done div ' + $scope.num1 + ' ' + $scope.num2);
    };

  });
