
var App = angular.module('dayly', []);
  App.filter('sortFunc', function () {
    return function (data) {
      if(angular.isArray(data)){
        var sortedEven= [], sortedOdd = [], output = [];
        for(var i=0, k=data.length; i<k; i++){
          if(data[i]%2 == 0){
            sortedEven.push(data[i]);
          } else {
            sortedOdd.push(data[i]);
          }
        };
      };
        sortedOdd.sort(function (n, m) {
          if(parseInt(n) > parseInt(m)){
            return 1;
          } else if (parseInt(n) < parseInt(m)) {
            return -1;
          } else {
            return 0;
          }
        });
        sortedEven.sort(function (n, m) {
          if(parseInt(n) > parseInt(m)){
            return 1;
          } else if (parseInt(n) < parseInt(m)) {
            return -1;
          } else {
            return 0;
        }
      });
      return output = sortedOdd.concat(sortedEven);
    }
  });
  App.controller('daylyCtrl', function ($scope) {
    $scope.figures = [1, -3, 3, 4, 5, 345, -44, -56];
  });
    // $scope.sortFunc = function (data) {
    //   if(angular.isArray(data)){
    //     var sortedEven= [], sortedOdd = [], output = [];
    //     for(var i=0, k=data.length; i<k; i++){
    //       if(data[i]%2 == 0){
    //         sortedEven.push(data[i]);
    //       } else {
    //         sortedOdd.push(data[i]);
    //       }
    //     };
    //     sortedOdd.sort(function (n, m) {
    //       if(parseInt(n) > parseInt(m)){
    //         return 1;
    //       } else if (parseInt(n) < parseInt(m) {
    //         return -1;
    //       } else {
    //         return 0;
    //       }
    //     };
    //     sortedEven.sort(function (n, m) {
    //       if(parseInt(n) > parseInt(m)){
    //         return 1;
    //       } else if (parseInt(n) < parseInt(m) {
    //         return -1;
    //       } else {
    //         return 0;
    //       }
    //     };
    //     return output = sortedOdd.concat(sortedEven);
    //
    //   };
    // };
