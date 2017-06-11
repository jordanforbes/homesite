angular.module('webappDirective', [])
	.directive('webapp', function(){
		return{
			scope: {webapp: '=' onWebappClick: '&'},
			restrict: 'A',
			templateUrl:'/views/webapp.ejs',
			controller: function($scope, webapps){
				$scope.onWebthumbClick= function(){
					$scope.onWebappClick({selectedTitle: $scope.title});
				}
				webapps.find($scope.webapp.id, function(webapp){
					$scope.title = webapp.title
				})
			}
		}
	})