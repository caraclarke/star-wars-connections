(function filmShowController() {

	var filmShowController = function(filmFactory, appSettings, $routeParams) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		var filmId = $routeParams.filmId;

		vm.films = [];
		vm.master = {};

		function init() {
			filmFactory.show(filmId)
			.then(function(result) {
				vm.master = result.data;
			}, function(data, status, headers, config) {
        console.log('error in filmShowController');
				console.error(data, status);
			});
		} // end init

		init();
	}; // end filmShowController

		filmShowController.$inject = ['filmFactory', 'appSettings', '$routeParams'];

		angular.module('starWarsApp').controller('filmShowController', filmShowController);
	})();