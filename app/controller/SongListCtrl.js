define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module("MusicHistory.songList", ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/songs/:songId', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongListCtrl'
    });
  }])
  .controller("SongListCtrl", 
  ["$scope", 
   "$routeParams",
   "$firebaseObject",
   "$firebaseArray",
  function($scope, $routeParams, $firebaseObject, $firebaseArray) {
    var ref = new Firebase("https://blazing-heat-6599.firebaseio.com/songs");
    
    // Data from firebase 
    $scope.songs = $firebaseObject(ref);
    $scope.song = $firebaseObject(ref.child($routeParams.songId));

    console.log("Song", $scope.song);
    console.log("$routeParams.songId", $routeParams.songId);

  }
  ]);
});
