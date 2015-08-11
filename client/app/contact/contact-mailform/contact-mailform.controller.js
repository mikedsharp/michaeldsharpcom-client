'use strict';

angular.module('michaeldsharpcomApp')
  .controller('ContactMailformCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.message = 'Hello';


    $scope.sendEmail = function() {

      // let the API know that we want these tags
      $http({
        withCredentials: false,
        method: 'post',
        url: '../api/mailers',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {

        }
      }).success(function(response) {
        console.log('tag added!');
      });

    };


  }]);
