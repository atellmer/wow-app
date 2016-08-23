;
(function() {
'use strict';

	angular
		.module('app')
		.controller('Section3Controller', Section3Controller);

	Section3Controller.$inject = [];

	function Section3Controller() {
		var vm = this;

		vm.selectItem = selectItem;
		

		activate();

		////////////////
		function activate() { }

		function selectItem(event) {
			var target = event.target;
			var parent = target.closest('[item]');
			var siblings = angular.element(parent).siblings('[item]');

			for (var i = 0; i < siblings.length; i++) {
				if (angular.element(siblings[i]).hasClass('js-is-selected')) {
					angular.element(siblings[i]).removeClass('js-is-selected');
					angular.element(siblings[i]).find('button').toggleClass('js-is-selected');
				}
			}

			angular.element(target).toggleClass('js-is-selected');
			angular.element(parent).toggleClass('js-is-selected');
		}
	}
})();