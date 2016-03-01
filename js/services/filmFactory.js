(function filmFactory() {

	var FilmFactory = function($http) {
		var eventAPI = {};
		var sa = 'http://swapi.co/api';

		eventAPI.getFilms = function() {
      // allow access to index
      return $http.get( sa + '/films/');
    };
    
    eventAPI.show = function(filmId) {
      return $http.get( sa + '/films/' + filmId);
    };
    
		return eventAPI;
	}; // end filmFactory

	FilmFactory.$inject = ['$http'];

	angular.module('starWarsApp').factory('filmFactory', FilmFactory);
})();