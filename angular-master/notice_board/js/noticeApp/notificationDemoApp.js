// notificationDemoApp Router

//Define an angular module for our notificationDemoApp

var App = angular.module('notificationDemoApp', ['ngRoute']);
App.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'html/home.html',
		controller: 'TodoCtrl'
	}).otherwise({
		redirectTo: '/home'
	});
}]).controller('TodoCtrl', function($scope, $http) {
	$scope.myStatus;
	$http.get('js/data.json')
		.then(function(res){
			$scope.todos = res.data;
		});

	$scope.status = function(checkstatus){
		//alert(status);
		if(checkstatus == "true")
		{
			$scope.myStatus=1;
		}
		else
		{
			$scope.myStatus=0;
		}
		alert($scope.myStatus);
	};
	alert($scope.myStatus);
});