angular.module('paintingDirective',[])
		.directive('painting', function(){
	return{
		scope: { painting: '='},
		restrict: 'A',
		templateUrl:'/views/painting.html',
		controller: function($scope, paintings){
			countries.find(scope.painting.name, function(painting){
				$scope.src = painting.src
			})
			}
		}
	})