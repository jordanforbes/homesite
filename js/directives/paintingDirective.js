angular.module('paintingDirective',[])
		.directive('painting', function(){
	return{
		scope: { painting: '=', onPaintingClick: '&'},
		restrict: 'A',
		templateUrl:'/views/painting.ejs',
		controller: function($scope, paintings){
				$scope.onPictureClick= function(){
					$scope.onPaintingClick({selectedSrc: $scope.src}),
					$scope.onPaintingClick({selectedTitle: $scope.title}),
					$scope.onPaintingClick({selectedYear: $scope.year}),
					$scope.onPaintingClick({selectedDescription: $scope.description})
				}
				paintings.find($scope.painting.id, function(painting){
					$scope.src = painting.src
					$scope.title = painting.title
					$scope.year = painting.year
					$scope.description = painting.description
				})
			}
		}
	})