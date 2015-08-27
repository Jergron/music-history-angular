app.controller("SongCtrl", 
  ["$scope", 
   "simple_storage", 
  function($scope, simple_storage) {
  
  $scope.songs = [];
  $scope.templates = [
    {url: 'partials/song-list.html'},
    {url: 'partials/song-detail.html'}

  ];
  $scope.songList = $scope.templates[0];
  $scope.songDetail = $scope.templates[1];
  
  $scope.songSearchText = "";
  $scope.newSong =     { 
      "title": "", 
      "artist": "", 
      "album": {
        "name": "", 
        "year": ""} 
      };

  $scope.killSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  }; 

  $scope.addSong = function() {
    $scope.songs.push({ 
      title: $scope.newSong.title, 
      artist: $scope.newSong.artist, 
      album: {
        name: $scope.newSong.album.name, 
        year: $scope.newSong.album.year } 
    });

  }; 

  $scope.resetFilter = function() {
    $scope.theAlbum = "";
    $scope.theArtist = "";  
  };


  simple_storage.getSongList("./data/comList.json")
    .then(function(songs) {
      for (var i = 0; i < songs.length; i++) {
        $scope.songs.push(songs[i]); 
      }
  simple_storage.getSongList("./data/comList2.json")
      .then(function(songs) {
        for (var i = 0; i < songs.length; i++) {
          $scope.songs.push(songs[i]); 
        }
      }, function(error) {
        console.log("error", error);
      });
    }, function(error) {
      console.log("error", error);
    });
  }
]);
