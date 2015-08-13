'use strict';

angular.module('michaeldsharpcomApp')
  .controller('ContactMailformCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.message = 'Hello';
	
	$scope.mail = {
		email : '', 
		name: '', 
		message : ''
	};

    $scope.sendEmail = function() {

      // let the API know that we want these tags
      $http({
        withCredentials: false,
        method: 'post',
        url: '../api/mailers',
        headers: {
          'Content-Type': 'application/json'
        },
        data: $scope.mail
		
      }).success(function(response) {
	  
		$scope.mail = {
			email : '', 
			name: '', 
			message : ''
		};
      
	  });

    };

  }]);
