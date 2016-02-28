(function vehicleIndexController() {

	var VehicleIndexController = function(vehicleFactory, appSettings) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		vm.reverse = false;

		vm.vehicles = [];
		vm.currentVehicle = {};
		vm.master = {};

		function init() {
			vehicleFactory.getVehicles()
			.then(function(result) {
			  vm.vehicles = result.data.results;
        console.log(result.data.results);
			}, function(data, status, headers, config) {
				console.log('error from vehicleIndexController');
        console.error(status);
			});
		} // end init

		vm.doSort = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};

		init();
	}; // end vehicleIndexController

		VehicleIndexController.$inject = ['vehicleFactory', 'appSettings'];

		angular.module('starWarsApp').controller('vehicleIndexController', VehicleIndexController);
	})();