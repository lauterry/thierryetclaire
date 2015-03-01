angular.module('ThierryEtClaire').factory('airBnb', function ($window) {
	"use strict";

	var ROOT_URL = "https://www.airbnb.fr";

	return {
		search: function (checkin, checkout, guests) {
			$window.open(ROOT_URL + '/s/bezannes?checkin=' + checkin + "&checkout=" + checkout + '&guests=' + guests, '_blank');
		}
	};

});
