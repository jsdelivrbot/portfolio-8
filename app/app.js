'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolio', [
  'ngRoute', 
  'portfolio.projects',
  'portfolio.photography',
  'portfolio.aboutMe'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/projects'});
}]);
