angular.module('ThierryEtClaire').controller('rsvpController', function ($scope, $log) {
    "use strict";

	$scope.contact = {
		adults : 1,
		children : 0
	};

	$scope.sendResponse = function () {
		if ($scope.rsvpForm.$valid) {
			$log(JSON.stringify($scope.contact));
		}
	};

});
