'use strict';

describe('Controller: PersonCtrl', function () {

  // load the controller's module
  beforeEach(module('bigbang'));

  var PersonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    /*MainCtrl = $controller('AboutCtrl', {
      $scope: scope
    });*/
  }));

  it('should ...', function () {
    // TODO
  });
});
