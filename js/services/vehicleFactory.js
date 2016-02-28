(function vehicleFactory() {

	var VehicleFactory = function($http) {
		var eventAPI = {};
		var sa = 'http://swapi.co/api';

		eventAPI.getVehicles = function() {
      // allow access to index
      return $http.get( sa + '/vehicles/');
    };
    
    eventAPI.show = function(vehicleId) {
      return $http.get( sa + '/vehicles/' + vehicleId);
    };
    
		return eventAPI;
	}; // end vehicleFactory

	VehicleFactory.$inject = ['$http'];

	angular.module('starWarsApp').factory('vehicleFactory', VehicleFactory);
})();