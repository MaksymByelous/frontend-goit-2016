angular.module("app.config",[]).constant("appSettings",{DEV:!1,API:{HOST:""},WULIAN_OEM_ID_LENGTH:12}),function(t,e){"use strict";function n(t){return function(e){return e[t]}}var o=t.module("angular-underscore",[]),i=t.module("angular-underscore/utils",[]),r=t.module("angular-underscore/filters",[]);e._=e,e.each(["min","max","sortedIndex"],function(t){e[t]=e.wrap(e[t],function(t){var o=e.toArray(arguments).slice(1);return e.isString(o[2])?o[2]=n(o[2]):e.isString(o[1])&&(o[1]=n(o[1])),t.apply(e,o)})}),t.injector(["ng"]).invoke(["$filter",function(t){e.filter=e.select=e.wrap(t("filter"),function(t,n,o,i){return e.isArray(n)||(n=e.toArray(n)),t(n,o,i)}),e.reject=function(t,n){if(e.isString(n))return e.filter(t,"!"+n);var o=e.bind(e.difference,e,t);return o(e.filter(t,n))}}]),e.each(e.methods(e),function(n){function r(t){t[n]=e.bind(e[n],e)}e.each([o,i,t.module("angular-underscore/utils/"+n,[])],function(t){t.run(["$rootScope",r])})});var a=[["map","collect"],["reduce","inject","foldl"],["reduceRight","foldr"],["find","detect"],["filter","select"],"where","findWhere","reject","invoke","pluck","max","min","sortBy","groupBy","indexBy","countBy","shuffle","sample","toArray","size",["first","head","take"],"initial","last",["rest","tail","drop"],"compact","flatten","without","partition","union","intersection","difference",["uniq","unique"],"zip","object","indexOf","lastIndexOf","sortedIndex","keys","values","pairs","invert",["functions","methods"],"pick","omit","tap","identity","uniqueId","escape","unescape","result","template"];e.each(a,function(n){e.isArray(n)||(n=[n]);var i=e.bind(e[n[0]],e),a=function(){return i};e.each(n,function(n){e.each([o,r,t.module("angular-underscore/filters/"+n,[])],function(t){t.filter(n,a)})})})}(angular,_),function(t){"use strict";function e(t,e,n){n.defaults.withCredentials=!0,e.html5Mode({enabled:!0,requireBase:!1}),t.otherwise("/404")}function n(e,n){e.canonical="/",e.$state=n,e.$on("$stateChangeError",function(t){console.log(t)}),e.$on("$stateChangeSuccess",function(n,o,i,r){e.pageTitle=o.data&&o.data.title?o.data.title:"test task",t.element("body").scrollTop(0)}),e.broadcastScrollEvent=function(){e.$broadcast("scroll")}}t.module("app",["app.config","ngCookies","ui.bootstrap","ui.router","ngSanitize","ngResource","ngAnimate","ngMessages","ngMap","angular-loading-bar","ngTouch","angular-carousel","ngMaterial","duScroll","angular-underscore","angularLocalStorage"]).value("duScrollDuration",1e3).value("duScrollOffset",100).value("duScrollActiveClass","active-slide").config(e).run(n),e.$inject=["$urlRouterProvider","$locationProvider","$httpProvider"],n.$inject=["$rootScope","$state"]}(angular),function(t){"use strict";function e(){return{}}t.module("app").factory("HomeService",e),e.$inject=[]}(angular),function(t){"use strict";function e(t){function e(e,o,i,r){var a=isNaN(r)?n.throttleTime:r,c=e?"addEventListener":"removeEventListener";t[c](o,_.throttle(i,a))}var n={throttleTime:100,listen:e};return n}t.module("app").factory("WindowEventsService",e),e.$inject=["$window"]}(angular),angular.module("app").directive("onScroll",["$timeout",function(t){"use strict";return{scope:{onScroll:"&onScroll"},link:function(e,n){var o,i=250,r=!1,a=function(){r||(e.onScroll(),r=!0,o=t(function(){r=!1},i))};n.on("scroll",a),e.$on("$destroy",function(){n.off("scroll",a)})}}}]),function(t){"use strict";function e(t,e){function n(){return r.innStr=r.formData.inn.toString().substring(0,5),r.ageCheckRes=r.todayDays+r.dif70yers-r.innStr,r.ageCheckRes>r.minYears?(r.ageInvalid=!1,!0):(r.ageInvalid=!0,!1)}function o(){t({url:"/",method:"POST",data:r.formData,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8;"}}).then(function(t){alert("data sent")},function(){alert("something wrong")})}function i(){t.get("http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+r.formData.city).then(function(t){r.cities=e(t.data,15)})}var r=this;r.formSubmit=o,r.error="something wrong",r.formData={},r.showStep2=!1,r.showStep3=!1,r.minYears=7671,r.dif70yers=25569,r.todayDate=new Date,r.todayDays=r.todayDate.getTime()/864e5,r.ageCheck=n,r.ageInvalid=!1,r.getCities=i}t.module("app").controller("LandingController",e),e.$inject=["$http","limitToFilter"]}(angular),function(t){"use strict";function e(t){t.state("landing",{"abstract":!0,templateUrl:"/view/modules/landing/landing.html",controller:"LandingController",controllerAs:"main"})}t.module("app").config(e),e.$inject=["$stateProvider"]}(angular),function(t){"use strict";function e(t,e,n,o,i,r,a,c,l,u){function s(){g.newTopic={topic:g.inputTopic,comments:[]}}function d(){g.createTopic(),g.topics.push(g.newTopic),c.set("topics",JSON.stringify(g.topics))}function f(t){g.topics.splice(t,1),c.set("topics",JSON.stringify(g.topics))}function p(){g.topics[g.activeTopicIndex].comments.push(g.newComment),c.set("topics",JSON.stringify(g.topics))}var g=this;g.inputTopic="",g.activeTopicIndex=0,g.topics=JSON.parse(c.get("topics"))||[],g.addTopic=d,g.delTopic=f,g.createTopic=s,g.addComment=p}t.module("app").controller("LandingHomeController",e),e.$inject=["$document","$scope","$window","WindowEventsService","HomeService","$stateParams","$timeout","storage","$cookies","$rootScope"]}(angular),function(t){"use strict";function e(t){t.state("landing.home",{url:"/",templateUrl:"/view/modules/landing/home/home.html",controller:"LandingHomeController",controllerAs:"vm",data:{title:"test task"},params:{targetSectionName:"main"}})}t.module("app").config(e),e.$inject=["$stateProvider"]}(angular);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2QuanMiLCJhbmd1bGFyLXVuZGVyc2NvcmUuanMiLCJtYWluLmpzIiwic2VydmljZXMvaG9tZS5zZXJ2aWNlLmpzIiwic2VydmljZXMvd2luZG93LWV2ZW50cy1zZXJ2aWNlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL29uLXNjcm9sbC5qcyIsIm1vZHVsZXMvbGFuZGluZy9sYW5kaW5nLmN0cmwuanMiLCJtb2R1bGVzL2xhbmRpbmcvbGFuZGluZy5yb3V0ZS5qcyIsIm1vZHVsZXMvbGFuZGluZy9ob21lL2hvbWUuY3RybC5qcyIsIm1vZHVsZXMvbGFuZGluZy9ob21lL2hvbWUucm91dGUuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnN0YW50IiwiREVWIiwiQVBJIiwiSE9TVCIsIldVTElBTl9PRU1fSURfTEVOR1RIIiwibmciLCJfIiwicHJvcEdldHRlckZhY3RvcnkiLCJwcm9wIiwib2JqIiwidW5kZXJzY29yZU1vZHVsZSIsInV0aWxzTW9kdWxlIiwiZmlsdGVyc01vZHVsZSIsImVhY2giLCJmbk5hbWUiLCJ3cmFwIiwiZm4iLCJhcmdzIiwidG9BcnJheSIsImFyZ3VtZW50cyIsInNsaWNlIiwiaXNTdHJpbmciLCJhcHBseSIsImluamVjdG9yIiwiaW52b2tlIiwiJGZpbHRlciIsImZpbHRlciIsInNlbGVjdCIsImV4cCIsImNvbXBhcmF0b3IiLCJpc0FycmF5IiwicmVqZWN0IiwiZGlmZiIsImJpbmQiLCJkaWZmZXJlbmNlIiwibWV0aG9kcyIsIm1ldGhvZE5hbWUiLCJyZWdpc3RlciIsIiRyb290U2NvcGUiLCJydW4iLCJhZGFwTGlzdCIsImZpbHRlck5hbWVzIiwiZmlsdGVyRmFjdG9yeSIsImZpbHRlck5hbWUiLCJjb25maWd1cmUiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkbG9jYXRpb25Qcm92aWRlciIsIiRodHRwUHJvdmlkZXIiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsImh0bWw1TW9kZSIsImVuYWJsZWQiLCJyZXF1aXJlQmFzZSIsIm90aGVyd2lzZSIsInJ1bkJsb2NrIiwiJHN0YXRlIiwiY2Fub25pY2FsIiwiJG9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJ0b1N0YXRlIiwidG9QYXJhbXMiLCJmcm9tU3RhdGUiLCJwYWdlVGl0bGUiLCJkYXRhIiwidGl0bGUiLCJlbGVtZW50Iiwic2Nyb2xsVG9wIiwiYnJvYWRjYXN0U2Nyb2xsRXZlbnQiLCIkYnJvYWRjYXN0IiwidmFsdWUiLCJjb25maWciLCIkaW5qZWN0IiwiSG9tZVNlcnZpY2UiLCJmYWN0b3J5IiwiV2luZG93RXZlbnRzU2VydmljZSIsIiR3aW5kb3ciLCJsaXN0ZW4iLCJpc09uIiwidHlwZSIsIm1ldGhvZCIsInRpbWUiLCJkZWJvdW5jZVRpbWUiLCJpc05hTiIsImFwaSIsInRocm90dGxlVGltZSIsImxpc3RlbmVyVHlwZSIsInRocm90dGxlIiwiZGlyZWN0aXZlIiwiJHRpbWVvdXQiLCJzY29wZSIsIm9uU2Nyb2xsIiwibGluayIsInNjcm9sbFRocm90dGxlVGltZW91dCIsInNjcm9sbERlbGF5IiwidGhyb3R0bGVkIiwic2Nyb2xsSGFuZGxlciIsIm9uIiwib2ZmIiwiTGFuZGluZ0NvbnRyb2xsZXIiLCIkaHR0cCIsImxpbWl0VG9GaWx0ZXIiLCJhZ2VDaGVjayIsIm1haW4iLCJpbm5TdHIiLCJmb3JtRGF0YSIsImlubiIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiYWdlQ2hlY2tSZXMiLCJ0b2RheURheXMiLCJkaWY3MHllcnMiLCJtaW5ZZWFycyIsImFnZUludmFsaWQiLCJmb3JtU3VibWl0IiwidXJsIiwiaGVhZGVycyIsIkNvbnRlbnQtVHlwZSIsInRoZW4iLCJyZXNwb25zZSIsImFsZXJ0IiwiZ2V0Q2l0aWVzIiwiZ2V0IiwiY2l0eSIsImNpdGllcyIsInRoaXMiLCJzaG93U3RlcDIiLCJzaG93U3RlcDMiLCJ0b2RheURhdGUiLCJEYXRlIiwiZ2V0VGltZSIsImNvbnRyb2xsZXIiLCJsYW5kaW5nUm91dGUiLCIkc3RhdGVQcm92aWRlciIsInN0YXRlIiwiYWJzdHJhY3QiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXJBcyIsIkxhbmRpbmdIb21lQ29udHJvbGxlciIsIiRkb2N1bWVudCIsIiRzY29wZSIsIiRzdGF0ZVBhcmFtcyIsInN0b3JhZ2UiLCIkY29va2llcyIsImNyZWF0ZVRvcGljIiwidm0iLCJuZXdUb3BpYyIsInRvcGljIiwiaW5wdXRUb3BpYyIsImNvbW1lbnRzIiwiYWRkVG9waWMiLCJ0b3BpY3MiLCJwdXNoIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsImRlbFRvcGljIiwiaW5kZXgiLCJzcGxpY2UiLCJhZGRDb21tZW50IiwiYWN0aXZlVG9waWNJbmRleCIsIm5ld0NvbW1lbnQiLCJwYXJzZSIsImxhbmRpbmdIb21lUm91dGUiLCJwYXJhbXMiLCJ0YXJnZXRTZWN0aW9uTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQUFDLE9BQUEsaUJBRUFDLFNBQUEsZUFDQUMsS0FBQSxFQUNBQyxLQUNBQyxLQUFBLElBRUFDLHFCQUFBLEtDUEEsU0FBQUMsRUFBQUMsR0FDQSxZQVNBLFNBQUFDLEdBQUFDLEdBQ0EsTUFBQSxVQUFBQyxHQUFBLE1BQUFBLEdBQUFELElBUkEsR0FDQUUsR0FBQUwsRUFBQU4sT0FBQSx5QkFDQVksRUFBQU4sRUFBQU4sT0FBQSwrQkFDQWEsRUFBQVAsRUFBQU4sT0FBQSxnQ0FRQU8sR0FBQUEsRUFBQUEsRUFHQUEsRUFBQU8sTUFBQSxNQUFBLE1BQUEsZUFBQSxTQUFBQyxHQUNBUixFQUFBUSxHQUFBUixFQUFBUyxLQUFBVCxFQUFBUSxHQUFBLFNBQUFFLEdBQ0EsR0FBQUMsR0FBQVgsRUFBQVksUUFBQUMsV0FBQUMsTUFBQSxFQVdBLE9BVEFkLEdBQUFlLFNBQUFKLEVBQUEsSUFFQUEsRUFBQSxHQUFBVixFQUFBVSxFQUFBLElBRUFYLEVBQUFlLFNBQUFKLEVBQUEsTUFFQUEsRUFBQSxHQUFBVixFQUFBVSxFQUFBLEtBR0FELEVBQUFNLE1BQUFoQixFQUFBVyxP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LGNBQ0FDLEVBQUFNLE9BQUFDLEtBQUFQLEVBQUFDLFVBQ0FKLEVBQUFXLElBQUEsU0FBQUMsS0FBQUMsVUFBQVYsRUFBQU0sU0FHQSxRQUFBSyxHQUFBQyxHQUNBWixFQUFBTSxPQUFBTyxPQUFBRCxFQUFBLEdBQ0FmLEVBQUFXLElBQUEsU0FBQUMsS0FBQUMsVUFBQVYsRUFBQU0sU0FHQSxRQUFBUSxLQUNBZCxFQUFBTSxPQUFBTixFQUFBZSxrQkFBQVgsU0FBQUcsS0FBQVAsRUFBQWdCLFlBQ0FuQixFQUFBVyxJQUFBLFNBQUFDLEtBQUFDLFVBQUFWLEVBQUFNLFNBM0JBLEdBQUFOLEdBQUFwQixJQUVBb0IsR0FBQUcsV0FBQSxHQUNBSCxFQUFBZSxpQkFBQSxFQUNBZixFQUFBTSxPQUFBRyxLQUFBUSxNQUFBcEIsRUFBQXBCLElBQUEsZUFDQXVCLEVBQUFLLFNBQUFBLEVBQ0FMLEVBQUFXLFNBQUFBLEVBQ0FYLEVBQUFELFlBQUFBLEVBQ0FDLEVBQUFjLFdBQUFBLEVBZkFuSyxFQUFBQyxPQUFBLE9BQUFzSSxXQUFBLHdCQUFBTyxHQUdBQSxFQUFBbEUsU0FBQSxZQUFBLFNBQUEsVUFBQSxzQkFDQSxjQUFBLGVBQUEsV0FBQSxVQUFBLFdBQUEsZUFtQ0E1RSxTQ3pDQSxTQUFBQSxHQUNBLFlBSUEsU0FBQXVLLEdBQUE5QixHQUNBQSxFQUFBQyxNQUFBLGdCQUNBbkIsSUFBQSxJQUNBcUIsWUFBQSx1Q0FDQUwsV0FBQSx3QkFDQU0sYUFBQSxLQUNBekUsTUFDQUMsTUFBQSxhQUVBbUcsUUFDQUMsa0JBQUEsVUFiQXpLLEVBQUFDLE9BQUEsT0FBQTBFLE9BQUE0RixHQUNBQSxFQUFBM0YsU0FBQSxtQkFnQkE1RSIsImZpbGUiOiJhcHAubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoXCJhcHAuY29uZmlnXCIsIFtdKVxuXG4uY29uc3RhbnQoXCJhcHBTZXR0aW5nc1wiLCB7XG5cdFwiREVWXCI6IGZhbHNlLFxuXHRcIkFQSVwiOiB7XG5cdFx0XCJIT1NUXCI6IFwiXCJcblx0fSxcblx0XCJXVUxJQU5fT0VNX0lEX0xFTkdUSFwiOiAxMlxufSlcblxuOyIsIihmdW5jdGlvbiAobmcsIF8pIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhclxyXG4gICAgdW5kZXJzY29yZU1vZHVsZSA9IG5nLm1vZHVsZSgnYW5ndWxhci11bmRlcnNjb3JlJywgW10pLFxyXG4gICAgdXRpbHNNb2R1bGUgPSBuZy5tb2R1bGUoJ2FuZ3VsYXItdW5kZXJzY29yZS91dGlscycsIFtdKSxcclxuICAgIGZpbHRlcnNNb2R1bGUgPSBuZy5tb2R1bGUoJ2FuZ3VsYXItdW5kZXJzY29yZS9maWx0ZXJzJywgW10pO1xyXG5cclxuICAvLyBiZWdpbiBjdXN0b20gX1xyXG5cclxuICBmdW5jdGlvbiBwcm9wR2V0dGVyRmFjdG9yeShwcm9wKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7cmV0dXJuIG9ialtwcm9wXTt9O1xyXG4gIH1cclxuXHJcbiAgXy5fID0gXztcclxuXHJcbiAgLy8gU2hpdiBcIm1pblwiLCBcIm1heFwiICxcInNvcnRlZEluZGV4XCIgdG8gYWNjZXB0IHByb3BlcnR5IHByZWRpY2F0ZS5cclxuICBfLmVhY2goWydtaW4nLCAnbWF4JywgJ3NvcnRlZEluZGV4J10sIGZ1bmN0aW9uKGZuTmFtZSkge1xyXG4gICAgX1tmbk5hbWVdID0gXy53cmFwKF9bZm5OYW1lXSwgZnVuY3Rpb24oZm4pIHtcclxuICAgICAgdmFyIGFyZ3MgPSBfLnRvQXJyYXkoYXJndW1lbnRzKS5zbGljZSgxKTtcclxuXHJcbiAgICAgIGlmKF8uaXNTdHJpbmcoYXJnc1syXSkpIHtcclxuICAgICAgICAvLyBmb3IgXCJzb3J0ZWRJbmRleFwiLCB0cmFuc211dGluZyBzdHIgdG8gcHJvcGVydHkgZ2V0dGVyXHJcbiAgICAgICAgYXJnc1syXSA9IHByb3BHZXR0ZXJGYWN0b3J5KGFyZ3NbMl0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoXy5pc1N0cmluZyhhcmdzWzFdKSkge1xyXG4gICAgICAgIC8vIGZvciBcIm1pblwiIG9yIFwibWF4XCIsIHRyYW5zbXV0aW5nIHN0ciB0byBwcm9wZXJ0eSBnZXR0ZXJcclxuICAgICAgICBhcmdzWzFdID0gcHJvcEdldHRlckZhY3RvcnkoYXJnc1sxXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmbi5hcHBseShfLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBTaGl2IFwiZmlsdGVyXCIsIFwicmVqZWN0XCIgdG8gYW5ndWxhcidzIGJ1aWx0LWluLFxyXG4gIC8vIGFuZCByZXNlcnZlIHVuZGVyc2NvcmUncyBmZWF0dXJlKHdvcmtzIG9uIG9iaikuXHJcbiAgbmcuaW5qZWN0b3IoWyduZyddKS5pbnZva2UoWyckZmlsdGVyJywgZnVuY3Rpb24oJGZpbHRlcikge1xyXG4gICAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IF8ud3JhcCgkZmlsdGVyKCdmaWx0ZXInKSwgZnVuY3Rpb24oZmlsdGVyLCBvYmosIGV4cCwgY29tcGFyYXRvcikge1xyXG4gICAgICBpZighKF8uaXNBcnJheShvYmopKSkge1xyXG4gICAgICAgIG9iaiA9IF8udG9BcnJheShvYmopO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmlsdGVyKG9iaiwgZXhwLCBjb21wYXJhdG9yKTtcclxuICAgIH0pO1xyXG5cclxuICAgIF8ucmVqZWN0ID0gZnVuY3Rpb24ob2JqLCBleHApIHtcclxuICAgICAgLy8gdXNlIGFuZ3VsYXIgYnVpbHQtaW4gbmVnYXRlZCBwcmVkaWNhdGVcclxuICAgICAgaWYoXy5pc1N0cmluZyhleHApKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgJyEnICsgZXhwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGRpZmYgPSBfLmJpbmQoXy5kaWZmZXJlbmNlLCBfLCBvYmopO1xyXG5cclxuICAgICAgcmV0dXJuIGRpZmYoXy5maWx0ZXIob2JqLCBleHApKTtcclxuICAgIH07XHJcbiAgfV0pO1xyXG5cclxuICAvLyBlbmQgY3VzdG9tIF9cclxuXHJcblxyXG4gIC8vIGJlZ2luIHJlZ2lzdGVyIGFuZ3VsYXItdW5kZXJzY29yZS91dGlsc1xyXG5cclxuICBfLmVhY2goXy5tZXRob2RzKF8pLCBmdW5jdGlvbihtZXRob2ROYW1lKSB7XHJcbiAgICBmdW5jdGlvbiByZWdpc3Rlcigkcm9vdFNjb3BlKSB7JHJvb3RTY29wZVttZXRob2ROYW1lXSA9IF8uYmluZChfW21ldGhvZE5hbWVdLCBfKTt9XHJcblxyXG4gICAgXy5lYWNoKFtcclxuICAgICAgdW5kZXJzY29yZU1vZHVsZSxcclxuICAgICAgdXRpbHNNb2R1bGUsXHJcbiAgICAgIG5nLm1vZHVsZSgnYW5ndWxhci11bmRlcnNjb3JlL3V0aWxzLycgKyBtZXRob2ROYW1lLCBbXSlcclxuICAgICAgXSwgZnVuY3Rpb24obW9kdWxlKSB7XHJcbiAgICAgICAgbW9kdWxlLnJ1bihbJyRyb290U2NvcGUnLCByZWdpc3Rlcl0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGVuZCByZWdpc3RlciBhbmd1bGFyLXVuZGVyc2NvcmUvdXRpbHNcclxuXHJcblxyXG4gIC8vIGJlZ2luIHJlZ2lzdGVyIGFuZ3VsYXItdW5kZXJzY29yZS9maWx0ZXJzXHJcblxyXG4gIHZhclxyXG4gICAgYWRhcExpc3QgPSBbXHJcbiAgICAgIFsnbWFwJywgJ2NvbGxlY3QnXSxcclxuICAgICAgWydyZWR1Y2UnLCAnaW5qZWN0JywgJ2ZvbGRsJ10sXHJcbiAgICAgIFsncmVkdWNlUmlnaHQnLCAnZm9sZHInXSxcclxuICAgICAgWydmaW5kJywgJ2RldGVjdCddLFxyXG4gICAgICBbJ2ZpbHRlcicsICdzZWxlY3QnXSxcclxuICAgICAgJ3doZXJlJyxcclxuICAgICAgJ2ZpbmRXaGVyZScsXHJcbiAgICAgICdyZWplY3QnLFxyXG4gICAgICAnaW52b2tlJyxcclxuICAgICAgJ3BsdWNrJyxcclxuICAgICAgJ21heCcsXHJcbiAgICAgICdtaW4nLFxyXG4gICAgICAnc29ydEJ5JyxcclxuICAgICAgJ2dyb3VwQnknLFxyXG4gICAgICAnaW5kZXhCeScsXHJcbiAgICAgICdjb3VudEJ5JyxcclxuICAgICAgJ3NodWZmbGUnLFxyXG4gICAgICAnc2FtcGxlJyxcclxuICAgICAgJ3RvQXJyYXknLFxyXG4gICAgICAnc2l6ZScsXHJcbiAgICAgIFsnZmlyc3QnLCAnaGVhZCcsICd0YWtlJ10sXHJcbiAgICAgICdpbml0aWFsJyxcclxuICAgICAgJ2xhc3QnLFxyXG4gICAgICBbJ3Jlc3QnLCAndGFpbCcsICdkcm9wJ10sXHJcbiAgICAgICdjb21wYWN0JyxcclxuICAgICAgJ2ZsYXR0ZW4nLFxyXG4gICAgICAnd2l0aG91dCcsXHJcbiAgICAgICdwYXJ0aXRpb24nLFxyXG4gICAgICAndW5pb24nLFxyXG4gICAgICAnaW50ZXJzZWN0aW9uJyxcclxuICAgICAgJ2RpZmZlcmVuY2UnLFxyXG4gICAgICBbJ3VuaXEnLCAndW5pcXVlJ10sXHJcbiAgICAgICd6aXAnLFxyXG4gICAgICAnb2JqZWN0JyxcclxuICAgICAgJ2luZGV4T2YnLFxyXG4gICAgICAnbGFzdEluZGV4T2YnLFxyXG4gICAgICAnc29ydGVkSW5kZXgnLFxyXG4gICAgICAna2V5cycsXHJcbiAgICAgICd2YWx1ZXMnLFxyXG4gICAgICAncGFpcnMnLFxyXG4gICAgICAnaW52ZXJ0JyxcclxuICAgICAgWydmdW5jdGlvbnMnLCAnbWV0aG9kcyddLFxyXG4gICAgICAncGljaycsXHJcbiAgICAgICdvbWl0JyxcclxuICAgICAgJ3RhcCcsXHJcbiAgICAgICdpZGVudGl0eScsXHJcbiAgICAgICd1bmlxdWVJZCcsXHJcbiAgICAgICdlc2NhcGUnLFxyXG4gICAgICAndW5lc2NhcGUnLFxyXG4gICAgICAncmVzdWx0JyxcclxuICAgICAgJ3RlbXBsYXRlJ1xyXG4gICAgXTtcclxuXHJcbiAgXy5lYWNoKGFkYXBMaXN0LCBmdW5jdGlvbihmaWx0ZXJOYW1lcykge1xyXG4gICAgaWYoIShfLmlzQXJyYXkoZmlsdGVyTmFtZXMpKSkge1xyXG4gICAgICBmaWx0ZXJOYW1lcyA9IFtmaWx0ZXJOYW1lc107XHJcbiAgICB9XHJcblxyXG4gICAgdmFyXHJcbiAgICAgIGZpbHRlciA9IF8uYmluZChfW2ZpbHRlck5hbWVzWzBdXSwgXyksXHJcbiAgICAgIGZpbHRlckZhY3RvcnkgPSBmdW5jdGlvbigpIHtyZXR1cm4gZmlsdGVyO307XHJcblxyXG4gICAgXy5lYWNoKGZpbHRlck5hbWVzLCBmdW5jdGlvbihmaWx0ZXJOYW1lKSB7XHJcbiAgICAgIF8uZWFjaChbXHJcbiAgICAgICAgdW5kZXJzY29yZU1vZHVsZSxcclxuICAgICAgICBmaWx0ZXJzTW9kdWxlLFxyXG4gICAgICAgIG5nLm1vZHVsZSgnYW5ndWxhci11bmRlcnNjb3JlL2ZpbHRlcnMvJyArIGZpbHRlck5hbWUsIFtdKVxyXG4gICAgICAgIF0sIGZ1bmN0aW9uKG1vZHVsZSkge1xyXG4gICAgICAgICAgbW9kdWxlLmZpbHRlcihmaWx0ZXJOYW1lLCBmaWx0ZXJGYWN0b3J5KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gZW5kIHJlZ2lzdGVyIGFuZ3VsYXItdW5kZXJzY29yZS9maWx0ZXJzXHJcblxyXG59KGFuZ3VsYXIsIF8pKTtcclxuIiwiKGZ1bmN0aW9uKGFuZ3VsYXIpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcclxuICAgICdhcHAuY29uZmlnJyxcclxuICAgICduZ0Nvb2tpZXMnLFxyXG4gICAgJ3VpLmJvb3RzdHJhcCcsXHJcbiAgICAndWkucm91dGVyJyxcclxuICAgICduZ1Nhbml0aXplJyxcclxuICAgICduZ1Jlc291cmNlJyxcclxuICAgICduZ0FuaW1hdGUnLFxyXG4gICAgJ25nTWVzc2FnZXMnLFxyXG4gICAgJ25nTWFwJyxcclxuICAgICdhbmd1bGFyLWxvYWRpbmctYmFyJyxcclxuICAgICduZ1RvdWNoJyxcclxuICAgICdhbmd1bGFyLWNhcm91c2VsJyxcclxuICAgICduZ01hdGVyaWFsJyxcclxuICAgICdkdVNjcm9sbCcsXHJcbiAgICAnYW5ndWxhci11bmRlcnNjb3JlJyxcclxuICAgICdhbmd1bGFyTG9jYWxTdG9yYWdlJ1xyXG4gIF0pXHJcbiAgICAudmFsdWUoJ2R1U2Nyb2xsRHVyYXRpb24nLCAxMDAwKVxyXG4gICAgLnZhbHVlKCdkdVNjcm9sbE9mZnNldCcsIDEwMClcclxuICAgIC52YWx1ZSgnZHVTY3JvbGxBY3RpdmVDbGFzcycsICdhY3RpdmUtc2xpZGUnKVxyXG4gICAgLy8gLnZhbHVlKCdkdVNjcm9sbEVhc2luZycsIGludmVydGVkRWFzaW5nRnVuY3Rpb24pXHJcbiAgICAuY29uZmlnKGNvbmZpZ3VyZSlcclxuICAgIC5ydW4ocnVuQmxvY2spO1xyXG5cclxuICBjb25maWd1cmUuJGluamVjdCA9IFsnJHVybFJvdXRlclByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJywgJyRodHRwUHJvdmlkZXInXTtcclxuXHJcbiAgZnVuY3Rpb24gY29uZmlndXJlKCR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICRodHRwUHJvdmlkZXIpIHtcclxuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7ZW5hYmxlZDogdHJ1ZSwgcmVxdWlyZUJhc2U6IGZhbHNlfSk7XHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvNDA0Jyk7XHJcbiAgfVxyXG5cclxuICBydW5CbG9jay4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywnJHN0YXRlJ107XHJcblxyXG4gIGZ1bmN0aW9uIHJ1bkJsb2NrKCRyb290U2NvcGUsICRzdGF0ZSkge1xyXG4gICAgLy8gJHJvb3RTY29wZS4kb24oJ2Nsb3NlLW1vZGFscycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgJHVpYk1vZGFsU3RhY2suZGlzbWlzc0FsbCgpO1xyXG4gICAgLy8gfSk7XHJcbiAgICAkcm9vdFNjb3BlLmNhbm9uaWNhbCA9ICcvJztcclxuICAgICRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZUVycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlKSB7XHJcbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gdG9TdGF0ZS5kYXRhICYmIHRvU3RhdGUuZGF0YS50aXRsZSA/IHRvU3RhdGUuZGF0YS50aXRsZSA6ICd0ZXN0IHRhc2snO1xyXG4gICAgICBhbmd1bGFyLmVsZW1lbnQoJ2JvZHknKS5zY3JvbGxUb3AoMCk7XHJcbiAgICB9KTtcclxuICAgICRyb290U2NvcGUuYnJvYWRjYXN0U2Nyb2xsRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2Nyb2xsJyk7XHJcbiAgICB9O1xyXG4gIH1cclxufSkoYW5ndWxhcik7XHJcbiIsIihmdW5jdGlvbiAoYW5ndWxhcikge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5mYWN0b3J5KCdIb21lU2VydmljZScsIEhvbWVTZXJ2aWNlKTtcclxuXHJcbiAgSG9tZVNlcnZpY2UuJGluamVjdCA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBIb21lU2VydmljZSgpIHtcclxuXHJcblxyXG5cclxuICByZXR1cm4ge1xyXG5cclxuICB9O1xyXG59XHJcbn0pXHJcbihhbmd1bGFyKTtcclxuIiwiKGZ1bmN0aW9uIChhbmd1bGFyKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmZhY3RvcnkoJ1dpbmRvd0V2ZW50c1NlcnZpY2UnLCBXaW5kb3dFdmVudHNTZXJ2aWNlKTtcclxuXHJcbiAgV2luZG93RXZlbnRzU2VydmljZS4kaW5qZWN0ID0gWyckd2luZG93J107XHJcblxyXG4gIGZ1bmN0aW9uIFdpbmRvd0V2ZW50c1NlcnZpY2UoJHdpbmRvdykge1xyXG4gICAgdmFyIGFwaSA9IHtcclxuICAgICAgdGhyb3R0bGVUaW1lOiAxMDAsXHJcbiAgICAgIGxpc3RlbjogbGlzdGVuXHJcbiAgICB9O1xyXG5cclxuICAgIC8vbGlzdGVuZXIgdXBkYXRlc1xyXG4gICAgZnVuY3Rpb24gbGlzdGVuKGlzT24sIHR5cGUsIG1ldGhvZCwgdGltZSkge1xyXG5cclxuICAgICAgLy9jbGVhbiB0aW1lLCBkZXRlcm1pbmUgbGlzdGVuZXIgdHlwZVxyXG4gICAgICB2YXIgZGVib3VuY2VUaW1lID0gaXNOYU4odGltZSkgPyBhcGkudGhyb3R0bGVUaW1lIDogdGltZSxcclxuICAgICAgICBsaXN0ZW5lclR5cGUgPSBpc09uID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xyXG5cclxuICAgICAgLy91cGRhdGUgdGhyb3R0bGVkIGxpc3RlbmVyXHJcbiAgICAgICR3aW5kb3dbbGlzdGVuZXJUeXBlXSh0eXBlLCBfLnRocm90dGxlKG1ldGhvZCwgZGVib3VuY2VUaW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9pbnRlcmZhY2VcclxuICAgIHJldHVybiBhcGk7XHJcbiAgfVxyXG59KShhbmd1bGFyKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuZGlyZWN0aXZlKCdvblNjcm9sbCcsIGZ1bmN0aW9uKCR0aW1lb3V0KSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2NvcGU6IHtcclxuICAgICAgb25TY3JvbGw6ICcmb25TY3JvbGwnLFxyXG4gICAgfSxcclxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50KSB7XHJcbiAgICAgIHZhciBzY3JvbGxEZWxheSA9IDI1MCxcclxuICAgICAgICBzY3JvbGxUaHJvdHRsZVRpbWVvdXQsXHJcbiAgICAgICAgdGhyb3R0bGVkID0gZmFsc2UsXHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYgKCF0aHJvdHRsZWQpIHtcclxuICAgICAgICAgICAgc2NvcGUub25TY3JvbGwoKTtcclxuICAgICAgICAgICAgdGhyb3R0bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2Nyb2xsVGhyb3R0bGVUaW1lb3V0ID0gJHRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICB0aHJvdHRsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgc2Nyb2xsRGVsYXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBlbGVtZW50Lm9uKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGVsZW1lbnQub2ZmKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbiIsIihmdW5jdGlvbihhbmd1bGFyKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdMYW5kaW5nQ29udHJvbGxlcicsIExhbmRpbmdDb250cm9sbGVyKTtcclxuXHJcbiAgTGFuZGluZ0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGh0dHAnLCAnbGltaXRUb0ZpbHRlciddO1xyXG4gIGZ1bmN0aW9uIExhbmRpbmdDb250cm9sbGVyKCRodHRwLCBsaW1pdFRvRmlsdGVyKSB7XHJcbiAgICB2YXIgbWFpbiA9IHRoaXM7XHJcblxyXG4gICAgbWFpbi5mb3JtU3VibWl0ID0gZm9ybVN1Ym1pdDtcclxuICAgIG1haW4uZXJyb3IgPSAnc29tZXRoaW5nIHdyb25nJztcclxuICAgIG1haW4uZm9ybURhdGEgPSB7fTtcclxuICAgIG1haW4uc2hvd1N0ZXAyID0gZmFsc2U7XHJcbiAgICBtYWluLnNob3dTdGVwMyA9IGZhbHNlO1xyXG5cclxuICAgIG1haW4ubWluWWVhcnMgPSA3NjcxO1xyXG4gICAgbWFpbi5kaWY3MHllcnMgPSAyNTU2OTtcclxuICAgIG1haW4udG9kYXlEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIG1haW4udG9kYXlEYXlzID0gIG1haW4udG9kYXlEYXRlLmdldFRpbWUoKSAvIDg2NDAwMDAwO1xyXG4gICAgbWFpbi5hZ2VDaGVjayA9IGFnZUNoZWNrO1xyXG4gICAgbWFpbi5hZ2VJbnZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgbWFpbi5nZXRDaXRpZXMgPSBnZXRDaXRpZXM7XHJcblxyXG4gICAgZnVuY3Rpb24gYWdlQ2hlY2soKSB7XHJcbiAgICAgIG1haW4uaW5uU3RyID0gbWFpbi5mb3JtRGF0YS5pbm4udG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgNSk7XHJcbiAgICAgIG1haW4uYWdlQ2hlY2tSZXMgPSBtYWluLnRvZGF5RGF5cyArIG1haW4uZGlmNzB5ZXJzIC0gbWFpbi5pbm5TdHI7XHJcbiAgICAgIGlmIChtYWluLmFnZUNoZWNrUmVzID4gIG1haW4ubWluWWVhcnMpIHtcclxuICAgICAgICBtYWluLmFnZUludmFsaWQgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSAgIGVsc2Uge1xyXG4gICAgICAgIG1haW4uYWdlSW52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybVN1Ym1pdCgpIHtcclxuICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgdXJsOiAnLycsXHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgZGF0YTogbWFpbi5mb3JtRGF0YSxcclxuICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Oyd9XHJcbiAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdkYXRhIHNlbnQnKTtcclxuICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENpdGllcygpIHtcclxuICAgICAgJGh0dHAuZ2V0KFwiaHR0cDovL2dkLmdlb2J5dGVzLmNvbS9BdXRvQ29tcGxldGVDaXR5P2NhbGxiYWNrPT8mcT1cIiArIG1haW4uZm9ybURhdGEuY2l0eSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBtYWluLmNpdGllcyA9IGxpbWl0VG9GaWx0ZXIocmVzcG9uc2UuZGF0YSwgMTUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KShhbmd1bGFyKTtcclxuIiwiKGZ1bmN0aW9uKGFuZ3VsYXIpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbmZpZyhsYW5kaW5nUm91dGUpO1xyXG4gIGxhbmRpbmdSb3V0ZS4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlciddO1xyXG5cclxuICBmdW5jdGlvbiBsYW5kaW5nUm91dGUoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdsYW5kaW5nJywge1xyXG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgdGVtcGxhdGVVcmw6ICcvdmlldy9tb2R1bGVzL2xhbmRpbmcvbGFuZGluZy5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ0xhbmRpbmdDb250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcclxuXHJcbiAgICB9KTtcclxuICB9XHJcbn0pKGFuZ3VsYXIpO1xyXG4iLCIoZnVuY3Rpb24gKGFuZ3VsYXIpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0xhbmRpbmdIb21lQ29udHJvbGxlcicsIExhbmRpbmdIb21lQ29udHJvbGxlcik7XHJcblxyXG5cclxuICBMYW5kaW5nSG9tZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGRvY3VtZW50JywgJyRzY29wZScsICckd2luZG93JywgJ1dpbmRvd0V2ZW50c1NlcnZpY2UnLFxyXG4gICAgJ0hvbWVTZXJ2aWNlJywgJyRzdGF0ZVBhcmFtcycsICckdGltZW91dCcsICdzdG9yYWdlJywgJyRjb29raWVzJywgJyRyb290U2NvcGUnXTtcclxuICBmdW5jdGlvbiBMYW5kaW5nSG9tZUNvbnRyb2xsZXIoJGRvY3VtZW50LCAkc2NvcGUsICR3aW5kb3csIFdpbmRvd0V2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMsICR0aW1lb3V0LCBzdG9yYWdlLCAkY29va2llcywgJHJvb3RTY29wZSkge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICB2bS5pbnB1dFRvcGljID0gJyc7XHJcbiAgICB2bS5hY3RpdmVUb3BpY0luZGV4ID0gMDtcclxuICAgIHZtLnRvcGljcyA9IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXQoJ3RvcGljcycpKSB8fCBbXTtcclxuICAgIHZtLmFkZFRvcGljID0gYWRkVG9waWM7XHJcbiAgICB2bS5kZWxUb3BpYyA9IGRlbFRvcGljO1xyXG4gICAgdm0uY3JlYXRlVG9waWMgPSBjcmVhdGVUb3BpYztcclxuICAgIHZtLmFkZENvbW1lbnQgPSBhZGRDb21tZW50O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvcGljKCkge1xyXG4gICAgICB2bS5uZXdUb3BpYyA9IHsndG9waWMnOiB2bS5pbnB1dFRvcGljLCAnY29tbWVudHMnOiBbXX07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9waWMoKSB7XHJcbiAgICAgIHZtLmNyZWF0ZVRvcGljKCk7XHJcbiAgICAgIHZtLnRvcGljcy5wdXNoKHZtLm5ld1RvcGljKTtcclxuICAgICAgc3RvcmFnZS5zZXQoJ3RvcGljcycsIEpTT04uc3RyaW5naWZ5KHZtLnRvcGljcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbFRvcGljKGluZGV4KSB7XHJcbiAgICAgIHZtLnRvcGljcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBzdG9yYWdlLnNldCgndG9waWNzJywgSlNPTi5zdHJpbmdpZnkodm0udG9waWNzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ29tbWVudCgpIHtcclxuICAgICAgIHZtLnRvcGljc1t2bS5hY3RpdmVUb3BpY0luZGV4XS5jb21tZW50cy5wdXNoKHZtLm5ld0NvbW1lbnQpO1xyXG4gICAgICAgc3RvcmFnZS5zZXQoJ3RvcGljcycsIEpTT04uc3RyaW5naWZ5KHZtLnRvcGljcykpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59KShhbmd1bGFyKTtcclxuIiwiKGZ1bmN0aW9uKGFuZ3VsYXIpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbmZpZyhsYW5kaW5nSG9tZVJvdXRlKTtcclxuICBsYW5kaW5nSG9tZVJvdXRlLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJ107XHJcblxyXG4gIGZ1bmN0aW9uIGxhbmRpbmdIb21lUm91dGUoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdsYW5kaW5nLmhvbWUnLCB7XHJcbiAgICAgIHVybDogJy8nLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJy92aWV3L21vZHVsZXMvbGFuZGluZy9ob21lL2hvbWUuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdMYW5kaW5nSG9tZUNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0aXRsZTogJ3Rlc3QgdGFzaydcclxuICAgICAgfSxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgdGFyZ2V0U2VjdGlvbk5hbWU6ICdtYWluJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pKGFuZ3VsYXIpO1xyXG4iXX0=