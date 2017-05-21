angular.module('paintingsFactory',[])
		.factory('paintings', function($http){
	return {
		list: function(callback){
			$http({
				method: 'GET',
				url: '/db/paintinglist.json',
				cache: true
			}).success(callback);
		},
		find: function(id, callback){
			$http({
				method: 'GET',
				url: '/db/paintings/painting_'+ id + '.json',
				cache: true
			}).success(callback);
		}
	}		
		})