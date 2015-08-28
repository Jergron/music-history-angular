app.filter('capitalize', function() {

  // Capitalizes the first letter of each word in a text string
  return function(input, scope) {
    if(input !== null) {
      var upperCase = input.split(' ');
      for(var i = 0; i < upperCase.length; i++) {
        upperCase[i] = upperCase[i].substring(0,1).toUpperCase()+upperCase[i].substring(1); 
      }
        return upperCase.join(' ');

    }
  };
});