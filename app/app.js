'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.mail',
  'myApp.version'
]).
config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
  $locationProvider.hashPrefix('!');

  $urlRouterProvider.otherwise('/mail/inbox');
}]);
