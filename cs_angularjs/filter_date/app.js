
var App = angular.module('dayly', []);

  App.controller('daylyCtrl', function ($scope) {
    $scope.byDate = '';
    $scope.tasks = [{task: 'do smth', date: 25},
                    {task: 'do anth', date: 4},
                    {task: 'ffffff anth', date: 5},
                    {task: 'ffo anth', date: 8},
                    {task: 'o anth', date: 9},
                    {task: 'danth', date: 12},
                    {task: 'do th', date: 345},
                    {task: 'o anth', date: 1},
                    {task: 'danth', date: 17},
                    {task: 'do th', date: 35},
                    {task: 'do anh', date: 45},
                    {task: 'do anth', date: 3},
                    {task: 'dont do', date: 12}
                  ];
    $scope.addNew = function () {
      $scope.tasks.push({
        task: $scope.task,
        date: $scope.date
      });
    };
    $scope.setDateFilter = function () {
      $scope.byDate !="date" ? $scope.byDate ="date" : $scope.byDate = "";
      console.log('click is ok');
    };

  });
