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
    vm.pageIndex = 0;
    vm.showAllPagination = false;
    vm.movieDetailedIndex;
    vm.findMovieIndex = findMovieIndex;
    vm.movieDetails = vm.movies[vm.movieDetailedIndex];
    vm.details = false;
    vm.nextMovieDetails = nextMovieDetails;

    function getPages() {
      $http.jsonp("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c").then(function(response) {
        vm.makePagination(response.data.total_pages);
        vm.getMovies();
      });
    }
    vm.getPages();

    function makePagination(max) {
      vm.pagesBy12 = Math.round( ((max - 1) * 20)/ 12 );
      for (var i = 0; i < vm.pagesBy12; i++) {
        vm.pages[i] = i + 1;
      }
    }

    function getMovies() {
      for (var i = 0; i < vm.pages.length; i++) {
        $http.jsonp("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=" + (i + 1) ).then(function(response) {
          for (var i = 0; i < response.data.results.length; i++) {
            vm.movies.push(response.data.results[i]);
          }
          vm.activePage = angular.copy(vm.movies).splice(0, 12);
        });
      }
    }

    function activatePage(index) {
      if(index < 0 || index > (vm.pages.length - 1)) {
        return;
      }
      vm.start = index * 12;
      vm.activePage = angular.copy(vm.movies).splice(vm.start, 12);
      vm.pageIndex = index;
    }

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
