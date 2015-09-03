define([
  'angular',
  'angularRoute',
  'angularFire',
  'angularFilter',
  'controller/SongCtrl',
  'controller/SongListCtrl'
], function(angular, angularRoute, _firebase, SongCtrl, SongListCtrl) {

    // Declare app level module which depends on views, and components
    return angular.module('MusicHistory', [
      'ngRoute',
      'firebase',
      'angular.filter',
      'MusicHistory.songForm',
      'MusicHistory.songList'
    ])
    .config(['$routeProvider', 
      function($routeProvider) {
        $routeProvider
        .otherwise({redirectTo: '/songs'});
    }]);
});














