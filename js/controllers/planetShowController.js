(function planetShowController() {

	var PlanetShowController = function(planetFactory, appSettings, $routeParams) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		var planetId = $routeParams.planetId;

		vm.planets = [];
		vm.master = {};

		function init() {
			planetFactory.show(planetId)
			.then(function(result) {
				vm.master = result.data;
			}, function(data, status, headers, config) {
        console.log('error in planetShowController');
				console.error(data, status);
			});
		} // end init

		init();
	}; // end planetShowController

		PlanetShowController.$inject = ['planetFactory', 'appSettings', '$routeParams'];

		angular.module('starWarsApp').controller('planetShowController', PlanetShowController);
	})();