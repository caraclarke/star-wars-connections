(function speciesShowController() {

	var SpeciesShowController = function(speciesFactory, appSettings, $routeParams) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		var alienId = $routeParams.alienId;

		vm.species = [];
		vm.master = {};

		function init() {
			speciesFactory.show(alienId)
			.then(function(result) {
				vm.master = result.data;
			}, function(data, status, headers, config) {
        console.log('error in speciesShowController');
				console.error(data, status);
			});
		} // end init

		init();
	}; // end speciesShowController

		SpeciesShowController.$inject = ['speciesFactory', 'appSettings', '$routeParams'];

		angular.module('starWarsApp').controller('speciesShowController', SpeciesShowController);
	})();