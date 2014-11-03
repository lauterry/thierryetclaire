angular.module('ThierryEtClaire').controller('rsvpController', function ($scope, googleForm) {
	"use strict";

	$scope.contact = {
		adults: 1,
		children: 0
	};

	$scope.flip = false;

	$scope.sendResponse = function () {

		if ($scope.rsvpForm.$valid) {
			var data = {
				"entry.19589932": $scope.contact.name,
				"entry.136525631": $scope.contact.email,
				"entry.369118585": $scope.contact.phone,
				"entry.1589868583": $scope.contact.adults,
				"entry.1254531879": $scope.contact.children
			};

			googleForm.save(data).success(function () {
				$scope.flip = !$scope.flip;
			}).error(function () {
				$scope.flip = !$scope.flip;
			});
		}
	};

	$scope.flipAndClear = function () {
		$scope.flip = false;
		$scope.contact = {
			adults: 1,
			children: 0
		};
		$scope.rsvpForm.$setPristine();
	};

});
