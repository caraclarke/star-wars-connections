(function planetFactory() {

	var PlanetFactory = function($http) {
		var eventAPI = {};
		var sa = 'http://swapi.co/api';

		eventAPI.getPlanets = function() {
      // allow access to index
      return $http.get( sa + '/planets/');
    };
    
    eventAPI.show = function(planetId) {
      return $http.get( sa + '/planets/' + planetId);
    };
    
		return eventAPI;
	}; // end planetFactory

	PlanetFactory.$inject = ['$http'];

	angular.module('starWarsApp').factory('planetFactory', PlanetFactory);
})();