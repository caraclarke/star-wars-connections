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
				vm.showPlanetPage(vm.planets);
			}, function(data, status, headers, config) {
				console.log('error from planetIndexController');
        console.error(status);
			});
		} // end init

		vm.doSort = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};
		
		vm.showPlanetPage = function(arr) {
			for (var i = 0; i < vm.planets.length; i++) {
				var url = document.createElement('a');
				url.href = vm.planets[i].url;
				url.pathname = url.pathname.replace(/(\/api\/)/, '');
				var newPlanetUrl = url.pathname;
				vm.planets[i].url = newPlanetUrl;
			}
		};

		init();
	}; // end planetIndexController

		PlanetIndexController.$inject = ['planetFactory', 'appSettings'];

		angular.module('starWarsApp').controller('planetIndexController', PlanetIndexController);
	})();