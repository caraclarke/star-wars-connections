(function starshipFactory() {

	var StarshipFactory = function($http) {
		var eventAPI = {};
		var sa = 'http://swapi.co/api';

		eventAPI.getStarships = function() {
      // allow access to index
      return $http.get( sa + '/starships/');
    };
    
    eventAPI.show = function(starshipId) {
      return $http.get( sa + '/starships/' + starshipId);
    };
    
		return eventAPI;
	}; // end starshipFactory

	StarshipFactory.$inject = ['$http'];

	angular.module('starWarsApp').factory('starshipFactory', StarshipFactory);
})();