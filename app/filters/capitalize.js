app.filter('capitalize', function() {
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