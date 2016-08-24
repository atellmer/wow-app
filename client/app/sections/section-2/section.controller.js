;
(function() {
'use strict';

	angular
		.module('app')
		.controller('Section2Controller', Section2Controller);

	Section2Controller.$inject = [];

	function Section2Controller() {
		var vm = this;

		var bosses = [
			{
				id: 0,
				active: true,
			},
			{
				id: 1,
				active: false,
			},
			{
				id: 2,
				active: false,
			},
			{
				id: 3,
				active: false,
			},
		];

		vm.activeBoss = {
			id: 0,
		};
		vm.selectBoss = selectBoss;

		activate();

		////////////////
		function activate() { }


		function setSelectedBoss(id) {
			for (var i = 0; i < bosses.length; i++) {
				bosses[i].active = false;
			}
			for (var i = 0; i < bosses.length; i++) {
				if (bosses[i].id === id) {
					bosses[i].active = true;
					vm.activeBoss.id = bosses[i].id;
				}
			}
		}

		function selectBoss(event, id) {
			var target = event.target;
			var siblings = angular.element(target).siblings('[item]');

			for (var i = 0; i < siblings.length; i++) {
				if (angular.element(siblings[i]).hasClass('js-is-selected')) {
					angular.element(siblings[i]).removeClass('js-is-selected');
					angular.element(siblings[i]).find('button').toggleClass('js-is-selected');
				}
			}

			setSelectedBoss(parseInt(id));

			if (!angular.element(target).hasClass('js-is-selected')) {
				angular.element(target).addClass('js-is-selected');
			}
			
			console.log('active boss #', vm.activeBoss.id);
		}
	}
})();