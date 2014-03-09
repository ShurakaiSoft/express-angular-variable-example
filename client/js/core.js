/**
 * AngularJS app
 *
 */

function JavaScriptGlobalCtrl($scope) {
	$scope.users = userList;
}

function RestfulJsonCtrl($scope, $http) {
	$http.get('/api/users')
	.success(function (data) {
		$scope.users = data;
	});
}

angular.module('demo', []);