angular.module('ThierryEtClaire', ['google-maps']);

angular.module('ThierryEtClaire').config(function ($httpProvider) {
	"use strict";

	$httpProvider.defaults.headers.post['Content-Type'] = 'application/xml;charset=utf-8';
});

