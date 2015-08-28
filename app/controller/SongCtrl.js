app.controller("SongCtrl", 
  ["$scope", 
   "simple_storage", 
  function($scope, simple_storage) {
    

  $scope.theAlbum = "";
  $scope.theArtist = "";
  $scope.songs = simple_storage;

  $scope.addSong = function() {
    $scope.songs.$add({ 
      title: $scope.newSong.title, 
      artist: $scope.newSong.artist, 
      album: {
        name: $scope.newSong.album.name, 
        year: $scope.newSong.album.year } 
    });
    $scope.songs = "";
    location.reload();
  };

  $scope.templates = [
    {url: 'partials/song-list.html'},
    {url: 'partials/song-detail.html'}
  ];

  $scope.songList = $scope.templates[0];
  $scope.songDetail = $scope.templates[1];
  $scope.songSearchText = ""; 

  $scope.killSong = function(song) {
    var songIndex = $scope.songs.$remove(song);
  }; 

  $scope.resetFilter = function() {
    $scope.theAlbum = "";
    $scope.theArtist = ""; 
  };

}
]);
