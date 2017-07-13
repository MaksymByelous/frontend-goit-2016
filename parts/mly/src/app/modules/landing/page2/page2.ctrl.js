(function(angular) {
  'use strict';
  angular.module('app').controller('LandingPage2Controller', LandingPage2Controller);

  LandingPage2Controller.$inject = ['$document', 'WindowEventsService', '$window', '$scope', '$timeout',
  'HomeService', '$stateParams'];
  function LandingPage2Controller($document, WindowEventsService, $window, $scope, $timeout,
     HomeService, $stateParams) {
    var vm = this;

    vm.scrollY = 0;
    vm.menuIsOpen = false;
    vm.toggleMobileMenu = toggleMobileMenu;
    vm.scrollTo = scrollTo;
    vm.windowWidth = $window.innerWidth;
    vm.windowHeight = $window.innerHeight;
    vm.windowY = 0;
    vm.news = HomeService.news;
    vm.newsLeftOut = vm.windowWidth * 0.29;
    vm.newsItemWidth = 400;
    vm.newsListWidth = vm.news.length * vm.newsItemWidth;
    vm.newsLeft = newsLeft;
    vm.newsRight = newsRight;
    vm.openNews = {};
    vm.detailedNewsOpened = false;
    vm.newsDetalsToggle = newsDetalsToggle;
    vm.leftArrowHovered = false;
    vm.rightArrowHovered = false;

    WindowEventsService.listen(true, 'scroll', defineScrollY);

    function defineScrollY() {
      vm.scrollY = $window.scrollY;
      $scope.$apply();
    }

    function scrollTo(sectionName) {
      $document.scrollToElementAnimated(vm.sections[sectionName].element);
    }

    function toggleMobileMenu() {
      vm.menuIsOpen = !vm.menuIsOpen;
    }


    if (vm.windowWidth < 700) {
      vm.newsLeftOut = 2;
      vm.newsItemWidth = 330;
    }

    function checkWindowWidth(){
        vm.windowWidth = $window.innerWidth;
        $timeout( checkWindowWidth, 200 );
    }
    checkWindowWidth();

    function eventDetails(event) {
      vm.selectedEvent = event;
      vm.showEventDetails = true;
    }

    function newsLeft() {
      if (vm.windowWidth > 700) {
        if(  (vm.newsListWidth + vm.newsLeftOut) < (vm.newsItemWidth * 2.5)  ) {
          vm.newsLeftOut = vm.windowWidth * 0.29;
        } else {
          vm.newsLeftOut -= vm.newsItemWidth;
        }
      } else {
        if(  (vm.newsListWidth + vm.newsLeftOut) < (vm.newsItemWidth*2.5)  ) {
          vm.newsLeftOut = 2;
        } else {
          vm.newsLeftOut -= vm.newsItemWidth;
        }
      }
    }

    function newsRight() {
      if (vm.windowWidth > 700) {
        if(  (vm.newsLeftOut/vm.windowWidth) > 0.73  ) {
          vm.newsLeftOut = vm.windowWidth * 0.29;
        } else {
          vm.newsLeftOut += vm.newsItemWidth;
        }
      } else {
        if(  vm.newsLeftOut < 3 && vm.newsLeftOut > -100  ) {
          vm.newsLeftOut = - vm.newsItemWidth * (vm.news.length - 1);
        } else {
          vm.newsLeftOut += vm.newsItemWidth;
        }
      }
    }

    function newsDetalsToggle() {
       vm.detailedNewsOpened = !vm.detailedNewsOpened;
    }

  }
})(angular);
