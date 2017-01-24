describe('simple calc tests', function () {
  var num1 = 2;
  var num2 = 3;
  var controller;
  var mockScope;
  beforeEach(angular.mock.module('calculator'));
  beforeEach(angular.mock.inject(function ($controller, $rootScope) {
    mockScope = $rootScope.$new();
    controller = $controller('calcCtrl', {
      $scope: mockScope
    });
  }));
  it('summ of numbers', function () {
    mockScope.num1 = num1;
    mockScope.num2 = 3;
    mockScope.result = mockScope.sum(2, 3);
    console.log(mockScope.sum)
    console.log(mockScope.num1);
    console.log(mockScope.result);
    expect(mockScope.result).toEqual(5);
  });

});
