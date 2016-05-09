(function starWarsApp() {
	var starWarsApp = angular.module('starWarsApp', ['ngRoute', 'react']);

	starWarsApp.config(function($routeProvider, $httpProvider) {
		// $httpProvider.defaults.withCredentials = true;
		$routeProvider
			.when('/', {
				controller: '',
				templateUrl: 'js/views/homeView.html'
			})
			.when('/people/', {
				controller: 'personIndexController',
				controllerAs: 'pIndexCtrl',
				templateUrl: 'js/views/personIndexView.html'
			})
      .when('/people/:personId', {
				controller: 'personShowController',
				controllerAs: 'pShowCtrl',
				templateUrl: 'js/views/personShowView.html'
			})
			.when('/planets/', {
				controller: 'planetIndexController',
				controllerAs: 'planetIndexCtrl',
				templateUrl: 'js/views/planetIndexView.html'
			})
			.when('/planets/:planetId', {
				controller: 'planetShowController',
				controllerAs: 'planetShowCtrl',
				templateUrl: 'js/views/planetShowView.html'
			})
			.when('/vehicles/', {
				controller: 'vehicleIndexController',
				controllerAs: 'vIndexCtrl',
				templateUrl: 'js/views/vehicleIndexView.html'
			})
			.when('/vehicles/:vehicleId', {
				controller: 'vehicleShowController',
				controllerAs: 'vShowCtrl',
				templateUrl: 'js/views/vehicleShowView.html'
			})
			.when('/films/', {
				controller: 'filmIndexController',
				controllerAs: 'fIndexCtrl',
				templateUrl: 'js/views/filmIndexView.html'
			})
			.when('/films/:filmId', {
				controller: 'filmShowController',
				controllerAs: 'fShowCtrl',
				templateUrl: 'js/views/filmShowView.html'
			})
			.when('/species/', {
				controller: 'speciesIndexController',
				controllerAs: 'sIndexCtrl',
				templateUrl: 'js/views/speciesIndexView.html'
			})
			.when('/species/:alienId', {
				controller: 'speciesShowController',
				controllerAs: 'sShowCtrl',
				templateUrl: 'js/views/speciesShowView.html'
			})
			.when('/starships/', {
				controller: 'starshipIndexController',
				controllerAs: 'starIndexCtrl',
				templateUrl: 'js/views/starshipIndexView.html'
			})
			.when('/starships/:starshipId', {
				controller: 'starshipShowController',
				controllerAs: 'starShowCtrl',
				templateUrl: 'js/views/starshipShowView.html'
			})
		.otherwise({ redirectTo: '/' });
	});
})();