app.filter('reverse', function() {

// Reverse's order of information
  return function(input, scope) {
    if(input !== null) {
      return input.split(" ").reverse().join(" ");
    }
  };
});