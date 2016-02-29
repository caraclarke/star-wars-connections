(function starWarsApp() {
	var starWarsApp = angular.module('starWarsApp', ['ngRoute']);

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
		.otherwise({ redirectTo: '/' }); 
	});
})();