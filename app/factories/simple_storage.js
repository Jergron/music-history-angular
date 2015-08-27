app.factory("simple_storage", function($q, $http) {
  
  return {

    getSongList: function(url) {

      return $q(function(resolve, reject) {

          $http.get(url)
          .success(
            function(objectFromJSONFile) {
              resolve(objectFromJSONFile.songs);
            },function(error) {
              reject(error);
            }
          );
       }); 
    }

  }
});