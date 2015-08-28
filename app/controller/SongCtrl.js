app.controller("SongCtrl", 
  ["$scope", 
   "simple_storage",
   "Auth",
  function($scope, simple_storage, Auth) {

    $scope.auth = Auth;

    // Any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
      console.log($scope.authData = authData);
    });

    $scope.theAlbum = "";
    $scope.theArtist = "";
    $scope.searchText = "";

    // Data from firebase 
    $scope.songs = simple_storage;

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
