angular.module('ThierryEtClaire').controller('hebergementsController', function ($scope) {
    "use strict";

    $scope.hebergements = [{
		name: "Hôtel B&B Reims",
		address1: "2 Rue Henri Moissan",
		address2: "51430 Bezannes",
		img: "img/hotel-BB.jpg"
	}, {
		name: "Akena",
		address1: "Rue Alfred Kastler",
		address2: "51430 Bezannes",
		img: "img/hotel-akena.jpg"
	}, {
		name: "Campanile Tinqueux",
		address1: "42 av Sarah Bernhardt",
		address2: "51430 Tinqueux",
		img: "img/hotel-campanile.jpg"
	}];
});