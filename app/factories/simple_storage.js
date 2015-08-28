app.factory("simple_storage", function($q, $http, $firebaseArray) {
  
  // Array of objects from firebase 
  var ref = new Firebase("https://blazing-heat-6599.firebaseio.com/songs");
  
  // Returns data to the controller 
  return $firebaseArray(ref);
});