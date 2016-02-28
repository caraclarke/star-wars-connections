(function personShowController() {

	var PersonShowController = function(personFactory, appSettings, $routeParams) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		var personId = $routeParams.personId;

		vm.people = [];
		// vm.currentPerson = {};
		vm.master = {};

		function init() {
			personFactory.show(personId)
			.then(function(result) {
				vm.master = result.data;
				console.log(result.data)
				console.log(personId);
			}, function(data, status, headers, config) {
        console.log('error in personShowController');
				console.error(data, status);
			});
		} // end init

		init();
	}; // end personShowController

		PersonShowController.$inject = ['personFactory', 'appSettings', '$routeParams'];

		angular.module('starWarsApp').controller('personShowController', PersonShowController);
	})();