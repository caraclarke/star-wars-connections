(function filmIndexController() {

	var FilmIndexController = function(filmFactory, appSettings) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'release_date';
		vm.reverse = false;

		vm.films = [];
		vm.currentFilm = {};
		vm.master = {};

		function init() {
			filmFactory.getFilms()
			.then(function(result) {
			  vm.films = result.data.results;
				vm.showFilmPage(vm.films);
			}, function(data, status, headers, config) {
				console.log('error from filmIndexController');
        console.error(status);
			});
		} // end init

		vm.doSort = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};
		
		vm.showFilmPage = function(arr) {
			for (var i = 0; i < vm.films.length; i++) {
				var url = document.createElement('a');
				url.href = vm.films[i].url;
				 url.pathname = url.pathname.replace(/(\/api\/)/, '');
				var newFilmUrl = url.pathname;
				vm.films[i].url = newFilmUrl;
			}
		};

		init();
	}; // end filmIndexController

		FilmIndexController.$inject = ['filmFactory', 'appSettings'];

		angular.module('starWarsApp').controller('filmIndexController', FilmIndexController);
	})();