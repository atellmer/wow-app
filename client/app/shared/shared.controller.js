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
	}
})();