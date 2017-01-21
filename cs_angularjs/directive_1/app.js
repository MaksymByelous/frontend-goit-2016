var app = angular.module('direct1', [])
                .controller('defaultCtrl', function ($scope) {
                        $scope.items = [
                          { name: "Table", price: 44.10 },
                          { name: "Chair", price: 21.20 },
                          { name: "Pillow", price: 12.20 },
                          { name: "Picture", price: 112.70 },
                          { name: "Lamp", price: 28.31 }
                      ];
                  })
                .directive('tableDirect', function () {
                    return {
                          link: function (scope, element, attributes) {
                          scope.data = scope[attributes["tableDirect"]];
                          },
                          restrict: "A",
                          template:
"<table><tr><td>Name</td><td>Price</td></tr><tr ng-repeat='item in data'><td>{{item.name}}</td> <td>{{item.price}}</td></tr></table>"
                          // template: "<ol><li ng-repeat='item in data'>{{item.name}}</li></ol>"
                    }
                  });
