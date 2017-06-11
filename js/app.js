var paintingApp = angular.module('paintingApp', [
	'ngRoute',
	'paintingControllers',
	'paintingsFactory',
	'paintingDirective'
	// 'appsFactory'
	]).controller("navCtrl", ['$scope',function($scope){
		$scope.myFunc = function(){
			var artBtn= document.getElementsByClassName("artbuttons")[0]
			if(artBtn.style.display== "block"){
				artBtn.style.display="none"
			}else{
				artBtn.style.display="block"

			}
		}
	}])

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

var contactApp = angular.module('contactApp', [
	'ngRoute',
	'contactsFactory'
	])

var webappsApp = angular.module('webappsApp', [
	'ngRoute',
	'webappControllers',
	'webappDirective',
	'webappsFactory'
	])

webappsApp.config(function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl:"/views/webappmain.ejs",
			controller: 'webappListCtrl'
		}).
		// when('/:paintingId',{
		// 	templateUrl:"/views/Paintingdetail.html",
		// 	controller: 'PaintingDetailCtrl'
		// }).
		otherwise({
			redirectTo: '/'
		});
});

var mainApp = angular.module('mainApp', [
	'ngRoute'])
