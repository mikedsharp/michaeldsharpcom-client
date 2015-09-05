'use strict';

angular.module('michaeldsharpcomApp')
  .controller('ProjectCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
    $scope.message = 'Hello';
    $scope.project_id=$routeParams.project_id;
    $scope.project = null;

    $http.get('/api/projects/' + $scope.project_id).
    then(function(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.project = response.data;
    }, function(response) {
      $scope.projects = [];
      // called asynchronously if an error occurs
      // or server returns response with an error ∫status.
    });
  }] );
