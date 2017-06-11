var webappControllers = angular.module('webappControllers',[]);

webappControllers.controller('WebappListCtrl', function($scope, webapps){
	webapps.list(function(webapps){
		$scope.webapps = webapps;
	})
	$scope.onWebappSelection= function(selectedtitle){
		$scope.selectedTitle = selectedTitle;
	}
})

webappControllers.controller('WebappDetailCtrl', function($scope, $routeParams, webapps){
	webapps.find($routeParams.webappId, function(webapp){
		$scope.webapp = webapp
	})
})