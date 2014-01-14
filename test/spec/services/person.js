'use strict';

describe('Service: person', function () {

  // load the service's module
  beforeEach(module('bigbang'));

  // instantiate service
  var personService, httpBackend;
  beforeEach(inject(function (_Persons_, _$httpBackend_) {
    personService = _Persons_;
    httpBackend = _$httpBackend_;
    httpBackend.expectJSONP('http://localhost:5000/persons?callback=JSON_CALLBACK').
      respond([
        {'name': 'John'},
        {'name': 'Jane'}
      ]);
  }));

  /*
   it('should do something', function () {
     expect(!!personService).toBe(true);
   });
   */

  it('should return JSON array with 2 items', inject(function ($rootScope) {
    var promise;
    var personList;

    runs(function () {
      promise = personService.all();
      expect(promise).not.toBeUndefined();
      httpBackend.flush();

      promise.then(function (data) {
        //onsole.log('DATA ' + data);
        personList = data;
      }, function (reason) {
        console.log('promise returned fail with reason: ' + reason);
      });
    });

    waitsFor(function () {
      $rootScope.$apply();
      return personList; //wait for personList to be set when asynch call returns.
    }, "getPersons should asynchronously return a list of persons", 500);

    runs(function () {
      expect(personList.length).toBe(2);
    });
  }));

});
