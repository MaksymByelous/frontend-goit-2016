var app = angular.module('direct2', [])
              .controller('defaultCtrl', function ($scope) {
                      $scope.items = [
                        { name: "Table", price: 44.10 },
                        { name: "Chair", price: 21.20 },
                        { name: "Pillow", price: 12.20 },
                        { name: "Picture", price: 112.70 },
                        { name: "Lamp", price: 28.31 }
                    ];
                })
              .directive('paragDirect', function () {
                  return {
                        link: function (scope, element, attributes) {
                        scope.data = scope[attributes["paragDirect"]];
                        },
                        restrict: "A",
                        templateUrl: 'templ.html',
                        replace: true
                  }
                });
