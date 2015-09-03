
define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module("MusicHistory.songForm", ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/songs', {
      templateUrl: 'partials/nav.html',
      controller: 'SongCtrl'
    });
  }])
  .controller("SongCtrl", 
  ["$scope", "$firebaseAuth", "$firebaseArray",
  function($scope, $firebaseAuth, $firebaseArray) {
    var ref = new Firebase("https://blazing-heat-6599.firebaseio.com/songs");
    
    // Data from firebase 
    $scope.songs = $firebaseArray(ref);

    $scope.auth = $firebaseAuth(ref);

    // Any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
      console.log($scope.authData = authData);
    });

    $scope.theAlbum = "";
    $scope.theArtist = "";
    $scope.searchText = "";


  // Adds songs to firebase 
    $scope.addSong = function() {
      $scope.songs.$add({ 
        title: $scope.newSong.title, 
        artist: $scope.newSong.artist, 
        album: {
          name: $scope.newSong.album.name, 
          year: $scope.newSong.album.year } 
      });

      location.reload();
    };

  // Array of html templates that get populate to the DOM
    $scope.templates = [
      {url: 'partials/song-list.html'},
      {url: 'partials/song-detail.html'}
    ];

    $scope.songList = $scope.templates[0];
    $scope.songDetail = $scope.templates[1];

  // Removes the song title and information from firebase
    $scope.killSong = function(song) {
      var songIndex = $scope.songs.$remove(song);
    }; 

  // Resets the artist and album filter on the sidebar
    $scope.resetFilter = function() {
      $scope.theAlbum = "";
      $scope.theArtist = ""; 
    };

}
]);
});
