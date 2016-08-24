;
(function() {
'use strict';

	angular
		.module('app')
		.controller('SharedController', SharedController);

	SharedController.$inject = [];

	function SharedController() {
		var vm = this;

		vm.navigateTo = navigateTo;
		
		activate();

		////////////////
		function activate() { }

		function navigateTo(id) {
			var top = $(id).offset().top;
        	$('body,html').animate({scrollTop: top}, 700);
		}
	}
})();