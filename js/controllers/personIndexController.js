(function personIndexController() {

	var PersonIndexController = function(personFactory, appSettings) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'name';
		vm.reverse = false;

		vm.people = [];
		vm.currentPerson = {};
		vm.master = {};

		function init() {
			personFactory.getPeople()
			.then(function(result) {
			  vm.people = result.data.results;
				vm.doColor(vm.people);
			}, function(data, status, headers, config) {
				console.log('error from personIndexController');
        console.error(status);
			});
		} // end init

		vm.doSort = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};
		
		vm.doColor = function(arr) {
			console.log('called');
			for (var i = 0; i < vm.people.length; i++) {
				var url = document.createElement('a');
				url.href = vm.people[i].url;
				 url.pathname = url.pathname.replace(/(\/api\/)/, '');
				var newPersonUrl = url.pathname;
				vm.people[i].url = newPersonUrl;
			}
		};

		init();
	}; // end personIndexController

		PersonIndexController.$inject = ['personFactory', 'appSettings'];

		angular.module('starWarsApp').controller('personIndexController', PersonIndexController);
	})();