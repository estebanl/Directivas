(function () {
    
    var module = angular.module('app').factory('data',function ($http) {

       function getData() {
         return $http.get('http://localhost:52369/api/values').then(function (data) {
             return data;
         })  
       };

       return {
           getData:getData
       }
    });
}());