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
			name: 'MediHelper',
			live: 'https://pacific-tor-26182.herokuapp.com/',
			github: 'https://github.com/stacy89/MediHelper',
			image: 'public/Projects/MediHelper.png',
			description: "MediHelper is an app designed to improve the process of caretaking and provides an easy access of medical information for doctor visits and emergencies. Focused on UI/UX design to create a simple easy to use app. Implemented Passport.js for user auth and error handling.",
			tempLogin: "(Login: test, Password: 1234)",
			tech: "Tech:  JavaScript, React.js, Node.js, Express, Passport.js, Twilio, Bootstrap, CSS, MongoDB, Full Calendar."
		},
		{
			name: 'Time Bank',
			live: 'https://timebankio.herokuapp.com/',
			github: 'https://github.com/stacy89/time-bank',
			image: 'public/Projects/TimeBank.png',
			description: "Time Bank was built to encourage kids to understand the importance of productive tasks.  Implemented Passport.js for user auth. Setup routes and database so children would link with parents when logged in. Created a simple UI/UX layout.",
			tempLogin: "(Login: John, Password: user)",
			tech: "Tech:  Javascript, Node.js, Express, jQuery, MySQL, Passport.js, Sequelize, Chart.js, Handlebars, Bootstrap."
		},
		{
			name: 'Thera-Bot',
			live: 'https://stacy89.github.io/project1/',
			github: 'https://github.com/stacy89/project1',
			image: 'public/Projects/theraBot.png',
			description: "This bot was built to help those dealing with any kind of emotion. You can have a semi-intelligent conversation and depending on how you feel the bot will play you a song from youtube. When a user visits the site they can click the start session button and the bot greets them and the conversation can start. Setup firebase to store user input and dialogflow to ensure proper interactions between the user and the chatbot.",
			tech: "Tech:  JavaScript, DialogFlow, Firebase"
		},
		{
			name: 'Student MGMT',
			live: 'https://teacherstudentmanagement.herokuapp.com/',
			github: 'https://github.com/stacy89/Student-Management-Tool',
			image: 'public/Projects/MGMT.png',
			description: "An administrative system to store student data and generate student groups based on criteria like GPA, gender, and attendance. Formulated the students routes and used CSS to design the pages. Implemented an user-friendly and easy to use app.",
			tempLogin: "(Login: teacher@teacher.com, Password: teacher)",
			tech: "Tech: Ruby on Rails, Ruby, PostgreSQL, Heroku, Twilio API"
		},
		{
			name: 'Authentic Realities',
			live: 'https://proj-authentic-realities.herokuapp.com/index.html',
			github: 'https://github.com/stacy89/Authentic-Realities',
			image: 'public/Projects/AuthenticRealities.png',
			description: "Data visualization using VR to express data/statistics of inequalities in salary based on personal identity. Created the main visual environment and helped set up triggered events on collision where users would see popup text or teleport to a moving image.",
			tech: "Tech: Unity, C#, MonoDevelop, Heroku, SteamVR, Oculus"
		},
		{
			name: 'Lost and Found',
			github: 'https://github.com/stacy89/Lost_and_Found',
			image: 'public/Projects/Lost&Found.png',
			description: "A social network app that allows people to travel and visit restaurants and bars like a local in a new city, instead of just being a tourist. This app was built after my own struggle to find real, authentic experiences while traveling. Built user authentication, integrated google maps, relational database, and created look and feel of the UI.",
			tech: "Tech: Sinatra, JavaScript,  Google Maps API"
		}
	];
}]);
