angular.module('ThierryEtClaire').controller('programmeController', function ($scope) {
    "use strict";

    $scope.steps = [{
		name: "Cérémonie civile",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem esse et, laborum libero numquam odit omnis pariatur totam veritatis voluptatum. Aliquid cumque eligendi est et inventore laboriosam, numquam odit veniam?",
		location : {
			name: "Mairie de Bezannes",
			address1: "1 rue Source de Muire",
			address2: "51726 Bezannes",
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
			time: "11H30"
		}
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
			time: "12H30"
		}
	}, {
		name: "Vin d'Honneur",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem esse et, laborum libero numquam odit omnis pariatur totam veritatis voluptatum. Aliquid cumque eligendi est et inventore laboriosam, numquam odit veniam?",
		location : {
			name: "Salle Hélios à la Mairie de Bezannes",
			address1: "1 rue Source de Muire",
			address2: "51726 Bezannes",
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
			time: "13H30"
		}
	}];
});