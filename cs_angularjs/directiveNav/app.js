var app = angular.module('directNav', [])
              .controller('defaultCtrl', function ($scope) {
                      $scope.items = [
                        { name: "About us", href: '/about-us' },
                        { name: "Team", href: '/team' },
                        { name: "Products", href: '/products' },
                        { name: "Carreer", href: '/carreer' },
                        { name: "Contacts", href: '/contacts' }
                    ];
                })
              .directive('createNav', function () {
                  return {
                        link: function (scope, element, attributes) {
                            scope.data = scope[attributes["createNav"]];
                        },
                        restrict: "A",
                        templateUrl: 'nav.html',
                        replace: true
                  }
                });
