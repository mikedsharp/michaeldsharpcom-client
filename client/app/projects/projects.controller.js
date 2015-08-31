'use strict';

angular.module('michaeldsharpcomApp')
  .controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.message = 'Hello';
    $scope.projects = [];

    $http.get('/api/projects').
    then(function(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.projects = response.data;
    }, function(response) {
      $scope.projects = [];
      // called asynchronously if an error occurs
      // or server returns response with an error ∫status.
    });

  }]);
