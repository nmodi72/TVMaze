angular.module('search.controller', [])
	.directive('characterPreview', function(){
		return {
			restrict: 'EA',
			scope: {
				character: '='
			},
			templateUrl: '../views/character.preview.html'
		}
	})
	.controller('SearchController', function ($scope,SearchService) {
		//$scope.hello = 'Hello World';
		$scope.search = function(){
			SearchService.query({name: $scope.name},function(response){
				console.log(response[0].show.name);
				$scope.characters = response;				
			});
		}
});