app.controller("SongCtrl", function($scope, $q) {
  $scope.songSearchText = "";
  $scope.theSong = "";
  $scope.songs = [];

  $scope.newSong =     { 
      "title": "", 
      "artist": "", 
      "album": {
        "name": "", 
        "year": ""} 
      }

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
  }

function getSongList(url) {

  return $q(function(resolve, reject) {

      $.ajax({
        url: url 
      })
      .done(function(response){
        resolve(response.songs);
      })
      .fail(function(xhr, status, error) {
        reject(error);
      });
    }); 
}

getSongList("./data/comList.json")
    .then(function(songs) {
      for (var i = 0; i < songs.length; i++) {
        $scope.songs.push(songs[i]); 
      };
  getSongList("./data/comList2.json")
      .then(function(songs) {
        for (var i = 0; i < songs.length; i++) {
          $scope.songs.push(songs[i]); 
        };
      }, function(error) {
        console.log("error", error);
      });
    }, function(error) {
      console.log("error", error);
    });

});