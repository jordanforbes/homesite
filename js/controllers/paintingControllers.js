var paintingControllers = angular.module('paintingControllers',[]);

paintingControllers.controller('PaintingListCtrl', function($scope, paintings){
	paintings.list(function(paintings){
		$scope.paintings = paintings;
	})
	$scope.selectedSrc= '/assets/paintings/oy.jpg'
	$scope.selectedTitle='Oy'
	$scope.onPaintingSelection = function(selectedSrc, selectedTitle, selectedYear, selectedDescription){
		$scope.selectedSrc= selectedSrc;
		$scope.selectedTitle= selectedTitle;
		$scope.selectedYear = selectedYear;
		$scope.selectedDescription = selectedDescription;
	}
})

paintingControllers.controller('PaintingDetailCtrl', function($scope, $routeParams, paintings){
	paintings.find($routeParams.paintingId, function(painting){
		$scope.painting = painting;
	})
})
