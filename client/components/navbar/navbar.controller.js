'use strict';

angular.module('michaeldsharpcomApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'About',
      'link': '/about'
    },
    {
      'title': 'Projects',
      'link': '/projects'
    },
    {
      'title': 'Contact',
      'link': '/contact'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
