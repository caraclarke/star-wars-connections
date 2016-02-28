(function starWarsApp() {
	var starWarsApp = angular.module('starWarsApp', ['ngRoute']);

	starWarsApp.config(function($routeProvider, $httpProvider) {
		// $httpProvider.defaults.withCredentials = true;
		$routeProvider
			.when('/', {
				controller: 'treeController',
				controllerAs: 'tIndexCtrl',
				templateUrl: 'js/views/treeIndex.html'
			})
      .when('/people/:personId', {
				controller: 'personShowController',
				controllerAs: 'tShowCtrl',
				templateUrl: 'js/views/personView.html'
			})
		.otherwise({ redirectTo: '/' });
	});
})();