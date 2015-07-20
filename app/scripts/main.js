angular('editItem', []).
   directive('makeEditable', function() {
	   	return function($scope, element, attrs) {
	   		element.on('click', function() {
	   			$scope.$apply(function() {
	   				restrict: 'E',
	   	        	templateUrl: '~/editItem/app/editTemplate.html'
	   			})
	            
	   		})
	    }
   });
