(function starshipIndexController() {

	var StarshipIndexController = function(starshipFactory, appSettings) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		vm.reverse = false;

		vm.starships = [];
		vm.currentStarship = {};
		vm.master = {};

		function init() {
			starshipFactory.getStarships()
			.then(function(result) {
			  vm.starships = result.data.results;
				vm.showStarshipPage(vm.starships);
			}, function(data, status, headers, config) {
				console.log('error from starshipIndexController');
        console.error(status);
			});
		} // end init

		vm.doSort = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};
		
		vm.showStarshipPage = function(arr) {
			for (var i = 0; i < vm.starships.length; i++) {
				var url = document.createElement('a');
				url.href = vm.starships[i].url;
				 url.pathname = url.pathname.replace(/(\/api\/)/, '');
				var newStarshipUrl = url.pathname;
				vm.starships[i].url = newStarshipUrl;
			}
		};

		init();
	}; // end starshipIndexController

		StarshipIndexController.$inject = ['starshipFactory', 'appSettings'];

		angular.module('starWarsApp').controller('starshipIndexController', StarshipIndexController);
	})();