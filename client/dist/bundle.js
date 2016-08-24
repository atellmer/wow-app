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