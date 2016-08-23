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