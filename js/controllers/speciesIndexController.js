(function speciesIndexController() {

	var SpeciesIndexController = function(speciesFactory, appSettings) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		vm.reverse = false;

		vm.species = [];
		vm.currentAlien = {};
		vm.master = {};

		function init() {
			speciesFactory.getSpecies()
			.then(function(result) {
			  vm.species = result.data.results;
				vm.showAlienPage(vm.species);
			}, function(data, status, headers, config) {
				console.log('error from speciesIndexController');
        console.error(status);
			});
		} // end init

		vm.doSort = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};
		
		vm.showAlienPage = function(arr) {
			for (var i = 0; i < vm.species.length; i++) {
				var url = document.createElement('a');
				url.href = vm.species[i].url;
				 url.pathname = url.pathname.replace(/(\/api\/)/, '');
				var newAlienUrl = url.pathname;
				vm.species[i].url = newAlienUrl;
			}
		};

		init();
	}; // end speciesIndexController

		SpeciesIndexController.$inject = ['speciesFactory', 'appSettings'];

		angular.module('starWarsApp').controller('speciesIndexController', SpeciesIndexController);
	})();