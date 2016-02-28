(function personIndexController() {

	var PersonIndexController = function(personFactory, appSettings) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		vm.reverse = false;

		vm.people = [];
		vm.currentPerson = {};
		vm.master = {};

		function init() {
			personFactory.getPeople()
			.then(function(result) {
			  vm.people = result.data.results;
        console.log(result.data.results);
			}, function(data, status, headers, config) {
				console.log('error from personIndexController');
        console.error(status);
			});
		} // end init

		vm.doSort = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};

		init();
	}; // end personIndexController

		PersonIndexController.$inject = ['personFactory', 'appSettings'];

		angular.module('starWarsApp').controller('personIndexController', PersonIndexController);
	})();