(function planetIndexController() {

	var PlanetIndexController = function(planetFactory, appSettings) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		vm.reverse = false;

		vm.planets = [];
		vm.currentPlanet = {};
		vm.master = {};

		function init() {
			planetFactory.getPlanets()
			.then(function(result) {
			  vm.planets = result.data.results;
        console.log(result.data.results);
			}, function(data, status, headers, config) {
				console.log('error from planetIndexController');
        console.error(status);
			});
		} // end init

		vm.doSort = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};

		init();
	}; // end planetIndexController

		PlanetIndexController.$inject = ['planetFactory', 'appSettings'];

		angular.module('starWarsApp').controller('planetIndexController', PlanetIndexController);
	})();