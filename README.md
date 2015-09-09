#music-history-angular
###A Nashville Software School excercise for building a modular browser application using [RequireJS](http://requirejs.org) with [AngularJS](https://docs.angularjs.org/guide/introduction)

**music-history-angular** was created to help understand how Angular uses it's data binding and dependancy injection. 
Require was then later implemented in order to reduce a large amount of ```<script></script>``` tags using it's unique Asynchronous Module Definition.
The original code that I refactored from my previouse project can be found here: [music-history-5](https://github.com/Jergron/music-history-5)

**music-history-angular**  is a lifestyle app that allows the user to search and add song titles to their database

###Tasks
- [x] Refactor previous project using AngularJS data binding and dependancy injection 
- [x] Follow instructions from [angular-requirejs-seed](https://github.com/tnajdek/angular-requirejs-seed)
- [x] Implement RequireJS with AngularJS
- [ ] Use a music API to search for new songs
- [ ] Use Sass


##Installation
Look at the code in your library. 
* Clone repo: 
  * ``` https://github.com/Jergron/music-history-angular.git ```

* You will need to install ``bower``  and ``npm`` componants: 
  * ``` bower install ``` 
  * ``` npm install ```

### Using Angular
Used two-way data binding to help compile different templates into view. On lines 8 and 9 in controller titled ``SongCtrl.js`` is the path that is uploaded to the server and the path for the logic to be populated into the DOM.
```
    $routeProvider.when('/songs', {
      templateUrl: 'partials/nav.html',
      controller: 'SongCtrl'
    });
  ```

### Using Require
The purpose in using Require with Angular is going __from this:__
```
<body>

  <div ng-view></div>

  <script data-main="app/require-config" src="lib/bower_components/requirejs/require.js"></script>
   <script src="lib/bower_components/angular/angular.min.js"></script>
   <script src="lib/bower_components/firebase/firebase.js"></script>
   <script src="lib/bower_components/angularfire/dist/angularfire.min.js"></script>
   <script src="lib/bower_components/angular-route/angular-route.js"></script>
   <script src="lib/bower_components/angular-animate/angular-animate.js"></script>
   <script src="lib/node_modules/angular-filter/dist/angular-filter.min.js"></script>
   <script src="lib/bower_components/jquery/dist/jquery.min.js"></script>
   <script src="app/app.js"></script>
   <script src="app/factories/Auth.js"></script>
   <script src="app/factories/simple_storage.js"></script>
   <script src="app/filters/capitalize.js"></script>
   <script src="app/filters/reverse.js"></script>
   <script src="app/filters/sort.js"></script>
   <script src="app/controller/SongCtrl.js"></script>
   <script src="app/controller/SongListCtrl.js"></script>

</body>
</html>

```
__to this:__
```
<body>

  <div ng-view></div>
  
  <script data-main="app/require-config" src="lib/bower_components/requirejs/require.js"></script>
</body>
</html>
```
