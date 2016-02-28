(function vehicleShowController() {

	var VehicleShowController = function(vehicleFactory, appSettings, $routeParams) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		var vehicleId = $routeParams.vehicleId;

		vm.vehicles = [];
		vm.master = {};

		function init() {
			vehicleFactory.show(vehicleId)
			.then(function(result) {
        console.log(result.data)
        console.log(vehicleId);
				vm.master = result.data;
			}, function(data, status, headers, config) {
        console.log('error in vehicleShowController');
				console.error(data, status);
			});
		} // end init

		init();
	}; // end vehicleShowController

		VehicleShowController.$inject = ['vehicleFactory', 'appSettings', '$routeParams'];

		angular.module('starWarsApp').controller('vehicleShowController', VehicleShowController);
	})();