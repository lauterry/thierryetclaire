angular.module('ThierryEtClaire').service('geolocation', function ($window, $q) {
	"use strict";

	var isGeolocationSupported = function() {
		if($window.navigator.geolocation) {
			return true;
		} else {
			return false;
		}
	};



	return {
		getPosition : function () {
			var defer = $q.defer();
			var position = {};
			if (isGeolocationSupported) {
				$window.navigator.geolocation.getCurrentPosition(function (location) {
					position.latitude = location.coords.latitude;
					position.longitude = location.coords.longitude;
					return defer.resolve(position);
				}, function(error) {
					return defer.reject(error);
				});
			} else {
				return defer.reject();
			}

			return defer.promise;
		}
	};

});