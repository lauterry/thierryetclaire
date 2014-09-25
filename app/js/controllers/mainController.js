angular.module('ThierryEtClaire').controller('mainController', function ($scope, parallaxHelper) {
    "use strict";

	$scope.fast = parallaxHelper.createAnimator(0.6, 400, -100, 500);

	$scope.slow = parallaxHelper.createAnimator(0.3, 300, -100, 300);
});
