angular.module('bigbang.services.person', [])

    .factory('Persons', ['$http', '$q', function ($http, $q) {
        /*
         var personList = [
         {
         "id": 1,
         "name": "Homer",
         "lastName": "Simpson"
         },
         {
         "id": 2,
         "name": "Moe",
         "lastName": "Sizlak"
         }
         ];
         */

        return {
            all: function () {
                //return personList;
                var deferred = $q.defer();

                $http.jsonp('http://localhost:5000/persons?callback=JSON_CALLBACK').then(function (response) {
                    deferred.resolve(response.data);
                });

                return deferred.promise;
            },

            get: function (personId) {
                //return personList;
                var deferred = $q.defer();

                $http.jsonp('http://localhost:5000/persons/' + personId + '?callback=JSON_CALLBACK').then(function (response) {
                    deferred.resolve(response.data);
                });

                return deferred.promise;
            },

            save: function (projects) {
                console.log('save');
            }
        }
    }]);
