'use strict';

angular.module('michaeldsharpcomApp')
  .directive('contactMailform', function () {
    return {
      templateUrl: 'app/contact/contact-mailform/contact-mailform.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      },
      controller: 'ContactMailformCtrl',
      controllerAs: 'ContactMailformCtrl'
    };

  })
