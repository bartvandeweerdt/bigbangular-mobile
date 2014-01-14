angular.module('bigbang.controllers.person', [])

    .controller('PersonsCtrl', function ($scope, Persons) {
        var promise;

        promise = Persons.all();

        promise.then(function (data) {
            $scope.persons = data;
        }, function (reason) {
            alert('Could not get persons. \nReason: ' + reason);
        });

        $scope.title = "Persons";
    })

    .controller('PersonCtrl', function ($scope, $routeParams, Persons) {

        //$scope.person = Persons.get($routeParams.personId);

        var person;

        promise = Persons.get($routeParams.personId);

        promise.then(function (data) {
            person = $scope.person = data;
            $scope.title = person.name;
            $scope.imagepath = './img/'+person.id+'.jpg';
        }, function (reason) {
            alert('Could not get person. \nReason: ' + reason);
        });

    });