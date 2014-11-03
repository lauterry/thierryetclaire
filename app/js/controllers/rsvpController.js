angular.module('ThierryEtClaire').controller('rsvpController', function ($scope, $http, $log) {
    "use strict";

	$scope.contact = {
		adults : 1,
		children : 0
	};

	$scope.sendResponse = function () {
		if ($scope.rsvpForm.$valid) {
			var data = {
				"entry.19589932" : $scope.contact.name,
				"entry.136525631" : $scope.contact.email,
				"entry.369118585" : $scope.contact.phone,
				"entry.1589868583" : $scope.contact.adults,
				"entry.1254531879" : $scope.contact.children
			};

			$.ajax({
				url: "https://docs.google.com/a/herokuapp.com/forms/d/1YcaMZ7ld_p8ZfHJYH4JiUrzV1UZ-j365Qyf_xl9Gf2Q/formResponse",
				data: data,
				type: "POST",
				dataType: "xml",
				statusCode: {
					0: function() {},
					200: function() {}
				}
			});
		}
	};

});
