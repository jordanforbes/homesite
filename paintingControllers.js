var paintingControllers = angular.module('paintingControllers',[]);

paintingApp.controller('PaintingListCtrl', function($scope, paintings){
	paintings.list(function(paintings){
		$scope.paintings = paintings;
	})
})

paintingApp.controller('PaintingDetailCtrl', function($scope, $routeParams, paintings){
	paintings.find($routeParams.paintingTitle, function(painting){
		$scope.painting = painting;
	})
})
