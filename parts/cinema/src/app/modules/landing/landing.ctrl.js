(function(angular) {
  'use strict';
  angular.module('app').controller('LandingController', LandingController);

  LandingController.$inject = ['$document', '$scope', '$window', 'WindowEventsService', 'HomeService', '$stateParams', '$timeout', '$http'];
  function LandingController($document, $scope, $window, WindowEventsService, HomeService, $stateParams, $timeout, $http) {
    var vm = this;

    vm.getMovies = getMovies;
    vm.movies = HomeService.movies.results;
    vm.maxPages = Math.round(vm.movies.length / 12 - 1);
    vm.pages = [];
    vm.makePagination = makePagination;
    vm.activePage = angular.copy(vm.movies).splice(0, 12);
    vm.activatePage = activatePage;
    vm.pageIndex = 0;
    vm.showAllPagination = false;
    vm.movieDetailedIndex;
    vm.findMovieIndex = findMovieIndex;
    vm.movieDetails = vm.movies[vm.movieDetailedIndex];
    vm.details = false;
    vm.nextMovieDetails = nextMovieDetails;


    function makePagination() {
      for (var i = 0; i < vm.maxPages; i++) {
        vm.pages[i] = i + 1;
      }
    }
    vm.makePagination();

    function activatePage(index) {
      if(index < 0 || index > (vm.maxPages - 1)) {
        return;
      }
      vm.start = index * 12;
      vm.activePage = angular.copy(vm.movies).splice(vm.start, 12);
      vm.pageIndex = index;
    }

    function getMovies() {
      $http({
        method: 'GET',
        dataType: 'jsonp',
        url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c',
        data: {
          api_key: 'ebea8cfca72fdff8d2624ad7bbf78e4c'
        }
      }).then(function successCallback(response) {
          console.log('success load');
        }, function errorCallback(response) {
          console.log('load fail');
        });
    }
    // vm.getMovies();




    function findMovieIndex(movieid) {
      if(vm.pageIndex === 0) {
        vm.movieDetailedIndex = movieid;
      } else {
        vm.movieDetailedIndex = vm.pageIndex * 12 + movieid;
      }
      vm.movieDetails = vm.movies[vm.movieDetailedIndex];
    }

    function nextMovieDetails() {
      vm.movieDetailedIndex += 1;
      vm.movieDetails = vm.movies[vm.movieDetailedIndex];
    }

  }

})(angular);
