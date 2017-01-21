
          var testApp = angular.module('test', []);
          testApp.controller('testCtrl', function ($scope) {
            $scope.questions = model;
            $scope.url = 'result.html';
            $scope.answers = [];
            $scope.addSelected = function (index, data) {
              $scope.answers.push({
                name: 'question ' + parseInt(index + 1),
                answer: data
              });
              console.log($scope.answers);
            };
            $scope.showSelected = function () {
              $scope.showResult = true;
            }
          });
