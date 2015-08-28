app.filter('sort', function() {

  // Working progress to sort alphabetically 
  return function(input, scope) {
    if(input !== null) {
      return input.split("").sort().join("");
    }
  };
});