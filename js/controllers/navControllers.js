var paintingControllers = angular.module('paintingControllers',[]);

paintingControllers.controller("navCtrl", ['$scope',function($scope){
		$scope.myFunc = function(){
			alert('hi')
		}
	}])