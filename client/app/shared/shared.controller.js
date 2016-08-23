;
(function() {
'use strict';

	angular
		.module('app')
		.controller('SharedController', SharedController);

	SharedController.$inject = [];

	function SharedController() {
		var vm = this;

		vm.selectItem = selectItem;
		vm.navigateTo = navigateTo;
		

		activate();

		////////////////
		function activate() { }

		function selectItem(event) {
			var target = event.target;

			if (!target.hasAttribute('item')) { 
				target = target.closest('[item]');
			}
			angular.element(target).toggleClass('js-is-selected');
		}

		function navigateTo(id) {
			var top = $(id).offset().top;
        	$('body,html').animate({scrollTop: top}, 700);
		}
	}
})();