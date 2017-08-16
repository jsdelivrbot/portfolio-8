'use strict';

angular.module('portfolio.aboutMe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aboutMe', {
    templateUrl: 'aboutMe/aboutMe.html',
    controller: 'AboutMeCtrl'
  });
}])

.controller('AboutMeCtrl', ['$scope', function($scope) {
	
	
}]);

