/**
 * AngularJS app
 *
 */


var demo = angular.module('demo', []);

demo.controller('JavaScriptGlobalCtrl', function ($scope) {
	$scope.users = userList;
});

demo.controller('RestfulJsonCtrl', function ($scope, $http) {
	$http.get('/api/users')
	.success(function (data) {
		$scope.users = data;
	});
});
