'use strict';

describe('Directive: contactMailform', function () {

  // load the directive's module and view
  beforeEach(module('michaeldsharpcomApp'));
  beforeEach(module('app/contact/contact-mailform/contact-mailform.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  /*it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<contact-mailform></contact-mailform>');
    element = $compile(element)(scope);
    scope.$apply();
    //expect(element.text()).toBe('this is the contactMailform directive');
  }));
  */
});
