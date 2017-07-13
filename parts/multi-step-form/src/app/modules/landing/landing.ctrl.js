(function(angular) {
  'use strict';
  angular.module('app').controller('LandingController', LandingController);

  LandingController.$inject = ['$http', 'limitToFilter'];
  function LandingController($http, limitToFilter) {
    var main = this;

    main.formSubmit = formSubmit;
    main.error = 'something wrong';
    main.formData = {};
    main.showStep2 = false;
    main.showStep3 = false;

    main.minYears = 7671;
    main.dif70yers = 25569;
    main.todayDate = new Date();
    main.todayDays =  main.todayDate.getTime() / 86400000;
    main.ageCheck = ageCheck;
    main.ageInvalid = false;

    main.getCities = getCities;

    function ageCheck() {
      main.innStr = main.formData.inn.toString().substring(0, 5);
      main.ageCheckRes = main.todayDays + main.dif70yers - main.innStr;
      if (main.ageCheckRes >  main.minYears) {
        main.ageInvalid = false;
        return true;
      }   else {
        main.ageInvalid = true;
        return false;
      }
    }

    function formSubmit() {
      $http({
          url: '/',
          method: "POST",
          data: main.formData,
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
          }).then(function successCallback(response) {
              alert('data sent');
          }, function errorCallback() {
              alert("something wrong");
            });
    }

    function getCities() {
      $http.get("http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + main.formData.city).then(function (response) {
        main.cities = limitToFilter(response.data, 15);
      });
    }
  }

})(angular);
