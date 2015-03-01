angular.module('ThierryEtClaire').controller('AccomodationController', function (airBnb) {
	"use strict";

	this.searchAirBnb = function () {
		airBnb.search(this.checkin, this.checkout, this.guests);
	};

});
