'use strict';

angular.module('portfolio.photography', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photography', {
    templateUrl: 'photography/photography.html',
    controller: 'PhotographyCtrl'
  });
}])

.controller('PhotographyCtrl', ['$scope', 'Lightbox', function($scope) {

		$scope.categories = [
			{
				title: 'Landscapes'
			},
			{
				title: 'Portraits'
			},
			{
				title: 'Still Life'
			},
			{
				title: 'Travel'
			}
		];

		$scope.images = [
			{
				category: 'landscapes',
				image: 'public/Landscape/BakerBeach.jpg'
			},
			{
				category: 'landscapes',
				image: 'public/Landscape/BerkeleySunset.jpg'
			}, 
			{
				category: 'landscapes',
				image: 'public/Landscape/BigSur.jpg'
			},
			{
				category: 'landscapes',
				image: 'public/Landscape/GoldenGateBrigde.jpg'
			},
			{
				category: 'landscapes',
				image: 'public/Landscape/HalfmoonBayTrail.jpg'
			},
			{
				category: 'landscapes',
				image: 'public/Landscape/Marina.jpg'
			},
			{
				category: 'landscapes',
				image: 'public/Landscape/MarinaGGB.jpg'
			},
			{
				category: 'landscapes',
				image: 'public/Landscape/MarinMountains.JPG'
			},
			{
				category: 'portraits',
				image: 'public/Portraits/AlcoholicEdit.jpg'
			},
			{
				category: 'portraits',
				image: 'public/Portraits/AnoerxicEdit.jpg'
			}, 
			{
				category: 'portraits',
				image: 'public/Portraits/BingeEatingEdit.jpg'
			},
			{
				category: 'portraits',
				image: 'public/Portraits/HeroineEdit.jpg'
			},
			{
				category: 'portraits',
				image: 'public/Portraits/PlasticSurgeryEdit.jpg'
			},
			{
				category: 'portraits',
				image: 'public/Portraits/PyroEdit.jpg'
			},
			{
				category: 'portraits',
				image: 'public/Portraits/SelfMutilationEdit.jpg'
			},
			{
				category: 'portraits',
				image: 'public/Portraits/SerialKillerEdit.jpg'
			},
			{
				category: 'portraits',
				image: 'public/Portraits/SexEdit.jpg'
			},
			{
				category: 'portraits',
				image: 'public/Portraits/SmokingEdit.jpg'
			},
			{
				category: 'still life',
				image: 'public/StillLife/Toaster.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Bishop2014/Photo1.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Bishop2014/Photo2.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Bishop2014/Photo3.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Bishop2014/Photo4.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Bishop2014/Photo5.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Bishop2014/Photo6.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Bishop2014/Photo7.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Bishop2014/Photo8.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Bishop2014/Photo9.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Nicaragua2014/Photo1.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Nicaragua2014/Photo2.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Nicaragua2014/Photo3.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Nicaragua2014/Photo4.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Nicaragua2014/Photo5.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Nicaragua2014/Photo6.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Nicaragua2014/Photo7.jpg'
			},
			{
				category: 'travel',
				image: 'public/Travel/Nicaragua2014/Photo9.jpg'
			}
		];

		$scope.currentCategory = null;

		function setCurrentCategory(category) {
			$scope.currentCategory = category;
		}

		$scope.setCurrentCategory = setCurrentCategory;


}]);













