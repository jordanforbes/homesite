angular.module('contactDirective', [])
		.directive('contact', function(){
		return{
			scope: { contact: '='},
			restrict: 'A',
			templateUrl:'/views/navbar.ejs',
			controller: function($scope, contacts){
				contacts.find($scope.contact, function(contact){
					$scope.github = contact.github
					$scope.linkedin = contact.linkedin
				})
			}
		}
	})