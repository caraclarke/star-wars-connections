(function treeController() {

	var TreeController = function(treeFactory, appSettings) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		vm.reverse = false;

		vm.people = [];
		vm.currentPerson = {};
		vm.master = {};

		function init() {
			treeFactory.getPeople()
			.then(function(result) {
			  vm.people = result.data.results;
        console.log(result.data.results);
			}, function(data, status, headers, config) {
				console.log('error from treeController');
        console.error(status);
			});
		} // end init

		vm.doSort = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};

		init();
	}; // end treeController

		TreeController.$inject = ['treeFactory', 'appSettings'];

		angular.module('starWarsApp').controller('treeController', TreeController);
	})();