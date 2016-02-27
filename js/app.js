(function starWarsApp() {
	var starWarsApp = angular.module('starWarsApp', ['ngRoute', 'xyz.angular.swapi']);

	starWarsApp.config(function($routeProvider, $httpProvider) {
		$httpProvider.defaults.withCredentials = true;
		$routeProvider
			.when('/', {
				controller: 'treeController',
				controllerAs: 'tIndexCtrl',
				templateUrl: 'js/views/treeIndex.html'
			})
		.otherwise({ redirectTo: '/' });
	});
})();