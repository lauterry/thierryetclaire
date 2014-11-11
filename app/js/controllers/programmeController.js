angular.module('ThierryEtClaire').controller('programmeController', function ($scope, geolocation, $log, $window) {
    "use strict";

    $scope.steps = [{
		name: "Cérémonie civile",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem esse et, laborum libero numquam odit omnis pariatur totam veritatis voluptatum. Aliquid cumque eligendi est et inventore laboriosam, numquam odit veniam?",
		location : {
			name: "Mairie de Bezannes",
			address1: "Mairie, 1 Rue Source de Muire",
			address2: "51430 Bezannes",
			map : {
				center : {
					latitude: 49.2201195,
					longitude: 3.9859497
				},
				zoom: 16
			}
		},
		when : {
			date: "Samedi 13 Juin 2015",
			time: "11H00"
		},
		image : 'img/mairie-bezannes.jpg'
	}, {
		name: "Cérémonie religieuse",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem esse et, laborum libero numquam odit omnis pariatur totam veritatis voluptatum. Aliquid cumque eligendi est et inventore laboriosam, numquam odit veniam?",
		location : {
			name: "Eglise Saint-Martin",
			address1: "22 Rue de l'Ancien Château",
			address2: "51430 Bezannes",
			map: {
				center : {
					latitude: 49.2221761,
					longitude: 3.9858278
				},
				zoom: 16
			}
		},
		when : {
			date: "Samedi 13 Juin 2015",
			time: "15H00"
		},
		image : 'img/eglise-bezannes.jpg'
	}, {
		name: "Vin d'Honneur",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem esse et, laborum libero numquam odit omnis pariatur totam veritatis voluptatum. Aliquid cumque eligendi est et inventore laboriosam, numquam odit veniam?",
		location : {
			name: "Salle des fêtes de Bezannes",
			address1: "Mairie, 1 Rue Source de Muire",
			address2: "51430 Bezannes",
			map : {
				center : {
					latitude: 49.2201195,
					longitude: 3.9859497
				},
				zoom: 16
			}
		},
		when : {
			date: "Samedi 13 Juin 2015",
			time: "16H00"
		},
		image : 'img/vilmart.jpg'
	}, {
		name: "Dîner de mariage",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem esse et, laborum libero numquam odit omnis pariatur totam veritatis voluptatum. Aliquid cumque eligendi est et inventore laboriosam, numquam odit veniam?",
		location : {
			name: "Maison Vilmart",
			address1: "Mairie, 1 Rue Source de Muire",
			address2: "51430 Bezannes",
			map : {
				center : {
					latitude: 49.2201195,
					longitude: 3.9859497
				},
				zoom: 16
			}
		},
		when : {
			date: "Samedi 13 Juin 2015",
			time: "20H00"
		},
		image : 'img/vilmart.jpg'
	}];

	geolocation.getPosition().then(function(position) {
		$scope.position = position;
	}, function(error){
		$log.log(error);
	});


	$scope.launchItinerary = function (sourceCoordinate, destinationAddress) {

		var dest = destinationAddress.address1 + ' ' + destinationAddress.address2;

		var source = sourceCoordinate.latitude + "," + sourceCoordinate.longitude;
		$window.location.href = "http://maps.google.com/maps?saddr=" + source + '&daddr=' + dest;

	};
});
