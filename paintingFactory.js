// var paintingsFactory= angular.module('paintingsFactory',[]);

// paintingApp.factory('paintings', function($http){

// 	var cachedData;

// 	function getData(callback){
// 		if(cachedData){
// 			callback(cachedData);
// 		}else{
// 			$http.get('/db/paintinglist.json').success(function(data){
// 				cached = data;
// 				callback(data)
// 			})
// 		}
// 	}

// 	return{
// 		list: getData,
// 		find: function(title, callback){
// 			getData(function(data){
// 				var painting = data.filter(function(entry){
// 					return entry.title === title;
// 				})[0];
// 				callback(painting)
// 			});
// 		}
// 	}
// });

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