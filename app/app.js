var app = angular.module("MusicHistory",[ 'ngRoute', 'angular.filter', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/nav.html',
        controller: 'SongCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);