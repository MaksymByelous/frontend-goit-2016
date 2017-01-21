
          var toDoApp = angular.module('toDos', []);
          toDoApp.controller('toDosCtrl', function ($scope) {
            $scope.todos = todoModel.data;
            $scope.newToDo = todoModel.addItem;


            $scope.url = 'details.html';

            $scope.showDetails = function (index) {
              $scope.data= $scope.todos[index].description;
            };

            $scope.showOne = function (index) {
              $scope.oneTodo= $scope.todos[index];
              $scope.url = 'oneTodo.html'
            };


          });
