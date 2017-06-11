angular.module('webappsFactory',[])
		.factory('webapps', function($http){
	return {
		list: function(callback){
			$http({
				method: 'GET',
				url: '/db/applist.json',
				cache: true
			}).success(callback);
		},
		find: function(id, callback){
			$http({
				method: 'GET',
				url: '/db/apps/app_'+ id + '.json',
				cache: true
			}).success(callback);
		}
	}		
		})
