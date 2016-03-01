(function starshipShowController() {

	var StarshipShowController = function(starshipFactory, appSettings, $routeParams) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		var starshipId = $routeParams.starshipId;

		vm.starships = [];
		vm.master = {};

		function init() {
			starshipFactory.show(starshipId)
			.then(function(result) {
				vm.master = result.data;
			}, function(data, status, headers, config) {
        console.log('error in starshipShowController');
				console.error(data, status);
			});
		} // end init

		init();
	}; // end starshipShowController

		StarshipShowController.$inject = ['starshipFactory', 'appSettings', '$routeParams'];

		angular.module('starWarsApp').controller('starshipShowController', StarshipShowController);
	})();