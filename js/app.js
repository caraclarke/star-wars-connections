(function starWarsApp() {
	var starWarsApp = angular.module('starWarsApp', ['ngRoute']);

	starWarsApp.config(function($routeProvider, $httpProvider) {
		// $httpProvider.defaults.withCredentials = true;
		$routeProvider
			.when('/', {
				controller: 'personIndexController',
				controllerAs: 'pIndexCtrl',
				templateUrl: 'js/views/personIndexView.html'
			})
      .when('/people/:personId', {
				controller: 'personShowController',
				controllerAs: 'pShowCtrl',
				templateUrl: 'js/views/personshowView.html'
			})
			.when('/planets/', {
				controller: 'planetShowController',
				controllerAs: 'planetIndexCtrl',
				templateUrl: 'js/views/planetIndexView.html'
			})
			.when('/planets/:planetId', {
				controller: 'planetShowController',
				controllerAs: 'planepShowCtrl',
				templateUrl: 'js/views/planetShowView.html'
			})
		.otherwise({ redirectTo: '/' });
	});
})();