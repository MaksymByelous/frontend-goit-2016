var app = angular.module('formValidation', []);
app.controller('formValidationCtrl', function ($scope) {
  $scope.addSubcriber = function(newsubscriber) {
    $scope.massege = newsubscriber.email + ' you are subscribed!';
    };
    $scope.checkPass = function () {
      console.log($scope.newsubscriber.pass === $scope.newsubscriber.pass2);
      if ($scope.newsubscriber.pass === $scope.newsubscriber.pass2) {
        $scope.truePass = true;
      } else {
        $scope.truePass = false;
      }
    };
});
