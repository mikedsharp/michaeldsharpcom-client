'use strict';

angular.module('michaeldsharpcomApp')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/projects/project/:project_id', {
      templateUrl: 'app/projects/project/project.html',
      controller: 'ProjectCtrl'
    })
      .when('/projects/project', {
        templateUrl: 'app/projects/project/project.html',
        controller: 'ProjectCtrl'
      });
  });
