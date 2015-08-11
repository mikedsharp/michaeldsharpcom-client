'use strict';

describe('Controller: ContactMailformCtrl', function () {

  // load the controller's module
  beforeEach(module('michaeldsharpcomApp'));

  var ContactMailformCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactMailformCtrl = $controller('ContactMailformCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
