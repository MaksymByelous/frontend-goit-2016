var module = angular.module('myService', []);
module.factory('calcService', function () {
  return {
      sum: function (num1, num2) {
         return parseFloat(num1) + parseFloat(num2);
      },
      mult: function (num1, num2) {
        return num1 * num2;
      },
      minus: function (num1, num2) {
        return num1 - num2;
      },
      div: function (num1, num2) {
        return num1 / num2;
      }

    }
})
