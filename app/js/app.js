/* jshint -W117*/
/* jshint -W055*/

angular.module('ThierryEtClaire', ['google-maps']);

angular.module('ThierryEtClaire').config(function ($httpProvider) {
	"use strict";

	$httpProvider.defaults.headers.post['Content-Type'] = 'application/xml;charset=utf-8';
});


angular.module('ThierryEtClaire').run(function () {
	"use strict";

	window.sr = new scrollReveal({
		reset : true,
		delay : 'always',
		mobile : false
	});
});

