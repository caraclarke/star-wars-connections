(function personFactory() {

	var PersonFactory = function($http) {
		var eventAPI = {};
		var sa = 'http://swapi.co/api';

		eventAPI.getPeople = function() {
      // allow access to index
      return $http.get( sa + '/people/');
    };
    
    eventAPI.show = function(personId) {
      return $http.get( sa + '/people/' + personId);
    };
    
		return eventAPI;
	}; // end personFactory

	PersonFactory.$inject = ['$http'];

	angular.module('starWarsApp').factory('personFactory', PersonFactory);
})();