app.factory("simple_storage", function($q, $http, $firebaseArray) {
  
  var ref = new Firebase("https://blazing-heat-6599.firebaseio.com/songs");

  return $firebaseArray(ref);
});