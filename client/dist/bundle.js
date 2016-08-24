;
(function() {
	'use strict';

	angular.module('app', []);
})();
;
(function() {
	'use strict';
	
	angular
		.module('app')
		.config(prodMode);

	prodMode.$inject = ['$compileProvider'];

	function prodMode($compileProvider) {
		$compileProvider.debugInfoEnabled(false);
	}
})();
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
;
(function() {
'use strict';

	angular
		.module('app')
		.controller('Section2Controller', Section2Controller);

	Section2Controller.$inject = [];

	function Section2Controller() {
		var vm = this;

		var tabs = [
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
			{
				id: 4,
				active: false,
			},
			{
				id: 5,
				active: false,
			},
			{
				id: 6,
				active: false,
			},
			{
				id: 7,
				active: false,
			},
			{
				id: 8,
				active: false,
			},
			{
				id: 9,
				active: false,
			},
		];

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

		vm.activeTab = {
			id: 0,
		};
		vm.activeBoss = {
			id: 0,
		};

		vm.selectTab = selectTab;
		vm.selectBoss = selectBoss;

		activate();

		////////////////
		function activate() { }

		function selectTab(event, id) {
			var target = event.target;
			var siblings = [];

			if (!target.hasAttribute('item')) { 
				target = angular.element(target).closest('[item]');
			}
			siblings = angular.element(target).siblings('[item]');

			for (var i = 0; i < siblings.length; i++) {
				if (angular.element(siblings[i]).hasClass('js-is-selected')) {
					angular.element(siblings[i]).removeClass('js-is-selected');
				}
			}

			if (!angular.element(target).hasClass('js-is-selected')) {
				angular.element(target).addClass('js-is-selected');
			}

			_setSelectedTab(parseInt(id));
		}

		function selectBoss(event, id) {
			var target = event.target;
			var siblings = angular.element(target).siblings('[item]');

			for (var i = 0; i < siblings.length; i++) {
				if (angular.element(siblings[i]).hasClass('js-is-selected')) {
					angular.element(siblings[i]).removeClass('js-is-selected');
				}
			}

			if (!angular.element(target).hasClass('js-is-selected')) {
				angular.element(target).addClass('js-is-selected');
			}

			_setSelectedBoss(parseInt(id));
		}

		function _setSelectedBoss(id) {
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

		function _setSelectedTab(id) {
			for (var i = 0; i < tabs.length; i++) {
				tabs[i].active = false;
			}
			for (var i = 0; i < tabs.length; i++) {
				if (tabs[i].id === id) {
					tabs[i].active = true;
					vm.activeTab.id = tabs[i].id;
				}
			}
		}
	}
})();
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