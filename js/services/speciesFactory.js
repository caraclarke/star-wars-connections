(function speciesFactory() {

	var SpeciesFactory = function($http) {
		var eventAPI = {};
		var sa = 'http://swapi.co/api';

		eventAPI.getSpecies = function() {
      // allow access to index
      return $http.get( sa + '/species/');
    };
    
    eventAPI.show = function(alienId) {
      return $http.get( sa + '/species/' + alienId);
    };
    
		return eventAPI;
	}; // end speciesFactory

	SpeciesFactory.$inject = ['$http'];

	angular.module('starWarsApp').factory('speciesFactory', SpeciesFactory);
})();