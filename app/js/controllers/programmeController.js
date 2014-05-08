angular.module('ThierryEtClaire').controller('programmeController', function ($scope) {
    "use strict";

    $scope.steps = [{
		name: "Cérémonie civile",
		text: "Bezannes est une commune française, située dans le département de la Marne et la région Champagne-Ardenne. Elle fait partie de la communauté d'agglomération Reims Métropole. Ses habitants sont appelés les Bezannais. Elle fait partie des villes fleuries de France avec 3 fleurs.",
		location : {
			name: "Mairie de Bezannes",
			address1: "1 rue Source de Muire",
			address2: "51726 Bezannes Cédex",
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
		text: "L’église de Bezannes remonte dans ses parties principales au XIe siècle. Ce monument, qui a été décrit en détail par les auteurs du Répertoire archéologique de l’arrondissement de Reims, est d’une belle conservation et offre quelque intérêt. La tour romane est surmontée d’une flèche construite au XVIe siècle. L'église est classée parmi les monuments historiques depuis le 10 décembre 1912 .",
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
	}];
});