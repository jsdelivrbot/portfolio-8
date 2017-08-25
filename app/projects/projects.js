'use strict';

angular.module('portfolio.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', ['$scope', function($scope) {

	$scope.projects = [
		{
			live: 'https://teacherstudentmanagement.herokuapp.com/',
			github: 'https://github.com/stacy89/Student-Management-Tool',
			image: 'public/Projects/MGMT.png',
			description: "An administrative system to store student data and generate student groups based on criteria like GPA, gender, and attendance. Formulated the students routes and used CSS to design the pages. This tool is useful for teachers that have a hard time forming groups of their students and to keep track of what student belongs to what teacher. [Temp. access]--[email: teacher@teacher.com | password: teacher]",
			tech: "Tech: Ruby on Rails, PostgreSQL, Heroku, Paperclip Gem, Twilio API"
		},
		{
			github: 'https://github.com/stacy89/Lost_and_Found',
			image: 'public/Projects/Lost&Found.png',
			description: "A social network app that allows people to travel and visit restaurants and bars like a local in a new city, instead of just being a tourist. This app was built after my own struggle to find real, authentic experiences while traveling.",
			tech: "Tech: Sinatra, JavaScript,  Google Maps API"
		},
		{
			live: 'https://proj-authentic-realities.herokuapp.com/index.html',
			github: 'https://github.com/stacy89/Authentic-Realities',
			image: 'public/Projects/AuthenticRealities.png',
			description: "Data visualization using VR to express data/statistics of inequalities in salary based on personal identity. Created the main visual environment and helped with coding the triggered events on collision. This experience is offered to help users feels an emotional connection to the lived experience of socioeconomic status.",
			tech: "Tech: Unity, C#, MonoDevelop, GitHub, Heroku, SteamVR, Oculus"
		}
	];
}]);