

require.config({
  paths: {
    angular: '../lib/bower_components/angular/angular',
    firebase: '../lib/bower_components/firebase/firebase',
    angularFire: '../lib/bower_components/angularfire/dist/angularfire.min',
    angularRoute: '../lib/bower_components/angular-route/angular-route',
    angularFilter:'../lib/node_modules/angular-filter/dist/angular-filter.min'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularFire': ['angular', 'firebase'],
    'angularRoute': ['angular'],
    'angularFilter': ['angular'],
    'firebase': {'exports': 'Firebase'}
  },
  priority: [
    "angular"
  ]
});

require([
  'angular',
  'app'
  ], function(angular, app) {

    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
      angular.bootstrap(document, ["MusicHistory"]);
    });

  }
);