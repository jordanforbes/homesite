angularModule('contactsFactory'[])
	.factory('contacts', function($http){
		return{
			list: function(callback){
				$http({
					method: 'GET',
					url: '/db/info.json',
					cache: true
				}).success(callback)
			},
			find: function(callback){
				$http({
					method: 'GET',
					url: '/db/info.json'
					cache: true
				}).success(callback)
			}
		}
	})

