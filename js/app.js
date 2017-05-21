var paintingApp = angular.module('paintingApp', [
	'ngRoute',
	'paintingControllers',
	'paintingsFactory',
	'paintingDirective'
	]);

paintingApp.config(function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl:"/views/main.ejs",
			controller: 'PaintingListCtrl'
		}).
		// when('/:paintingId',{
		// 	templateUrl:"/views/Paintingdetail.html",
		// 	controller: 'PaintingDetailCtrl'
		// }).
		otherwise({
			redirectTo: '/'
		});
});

