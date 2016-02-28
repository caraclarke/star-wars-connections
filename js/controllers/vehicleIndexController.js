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
        vm.showVehiclePage(vm.vehicles);
			}, function(data, status, headers, config) {
				console.log('error from vehicleIndexController');
        console.error(status);
			});
		} // end init

		vm.doSort = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};
		
		vm.showVehiclePage = function(arr) {
			for (var i = 0; i < vm.vehicles.length; i++) {
				var url = document.createElement('a');
				url.href = vm.vehicles[i].url;
				url.pathname = url.pathname.replace(/(\/api\/)/, '');
				var newVehicleUrl = url.pathname;
				vm.vehicles[i].url = newVehicleUrl;
			}
		};

		init();
	}; // end vehicleIndexController

		VehicleIndexController.$inject = ['vehicleFactory', 'appSettings'];

		angular.module('starWarsApp').controller('vehicleIndexController', VehicleIndexController);
	})();