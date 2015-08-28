app.factory("Auth", function($firebaseAuth) {

  var ref = new Firebase("https://blazing-heat-6599.firebaseio.com");

      return $firebaseAuth(ref);

});