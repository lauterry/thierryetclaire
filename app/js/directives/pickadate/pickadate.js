angular.module('ThierryEtClaire').directive('pickadate', function () {
	"use strict";

	return {
		restrict : 'A',
		replace: true,
		templateUrl: 'js/directives/pickadate/pickadate.html',
		link: function (scope, ele, attr) {

			ele.pickadate({
				format: "dd/mm/yyyy"
			});

		}
	};
});
