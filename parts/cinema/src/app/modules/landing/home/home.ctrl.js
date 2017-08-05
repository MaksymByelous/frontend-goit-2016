(function(angular) {
  'use strict';
  angular.module('app').controller('LandingHomeController', LandingHomeController);

  LandingHomeController.$inject = ['$document', '$scope', '$window', 'WindowEventsService', 'HomeService', '$stateParams', '$timeout', '$http', '$sce'];
  function LandingHomeController($document, $scope, $window, WindowEventsService, HomeService, $stateParams, $timeout, $http, $sce) {
    var vm = this;

    vm.getPages = getPages;
    vm.pages = [];
    vm.makePagination = makePagination;
    vm.getMovies = getMovies;
    vm.movies = [];
    vm.activatePage = activatePage;
    vm.pageIndex = 1;
    vm.showAllPagination = false;
    vm.movieDetailedIndex;
    vm.openMovieDetails = openMovieDetails;
    vm.movieDetails = vm.movies[vm.movieDetailedIndex];
    vm.details = false;
    vm.nextMovieDetails = nextMovieDetails;


    function getPages() {
      $http.jsonp("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c").then(function(response) {
        vm.makePagination(response.data.total_pages);
        vm.getMovies(1);
      });
    }
    vm.getPages();

    function makePagination(max) {
      for (var i = 0; i < max; i++) {
        vm.pages[i] = i + 1;
      }
    }

    function getMovies(index) {
        $http.jsonp("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=" + index ).then(function(response) {
          vm.activePage = angular.copy(response.data.results);
        });
        vm.pageIndex = index;
    }

    function activatePage(index) {
      if(index < 1 || index > (vm.pages.length)) {
        return;
      }
      vm.pageIndex = index;
      vm.getMovies(index);
    }

    function openMovieDetails(movieid) {
      vm.movieDetailedIndex = movieid;
      vm.movieDetails = vm.activePage[vm.movieDetailedIndex];
    }

    function nextMovieDetails() {
      if(vm.movieDetailedIndex < 19) {
        vm.movieDetailedIndex += 1;
        vm.movieDetails = vm.activePage[vm.movieDetailedIndex];
      } else {
        vm.pageIndex +=1;
        vm.getMovies(vm.pageIndex);
        vm.movieDetailedIndex = 0;
        vm.movieDetails = vm.activePage[vm.movieDetailedIndex];
      }
    }

  }

})(angular);
