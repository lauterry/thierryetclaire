angular.module('ThierryEtClaire').factory('googleForm', function ($http) {
	"use strict";

	var GOOGLE_FORM_URL = "https://docs.google.com/a/herokuapp.com/forms/d/1YcaMZ7ld_p8ZfHJYH4JiUrzV1UZ-j365Qyf_xl9Gf2Q/formResponse";

	return {
		save : function (data) {
			return $http.post(GOOGLE_FORM_URL, data, {
				headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
				transformRequest: function (obj) {
					var str = [];
					for (var key in obj) {
						if (obj[key] instanceof Array) {
							for (var idx in obj[key]) {
								var subObj = obj[key][idx];
								for (var subKey in subObj) {
									str.push(encodeURIComponent(key) + "[" + idx + "][" + encodeURIComponent(subKey) + "]=" + encodeURIComponent(subObj[subKey]));
								}
							}
						}
						else {
							str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
						}
					}
					return str.join("&");
				}
			});
		}
	};
});
