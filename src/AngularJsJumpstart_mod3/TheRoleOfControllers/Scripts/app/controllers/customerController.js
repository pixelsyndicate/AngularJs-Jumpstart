﻿// don't leave global variables laying around. move to another file and use the angular.module('name') later.
//var mySimpleApp = angular.module('simpleApp', []);
// put your var into an anonymous function like...
// (function() { ... code here ... }());

(function () {

    // option that is recommended. create a variable that is your controller.
    function CustomerController($scope) {


        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
            {
                id: 1,
                joined: '2000-12-02',
                name: 'John',
                city: 'Chandler',
                orderTotal: 9.9956,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956
                    }
                ]
            },
            {
                id: 2,
                joined: '1965-01-25',
                name: 'Zed',
                city: 'Las Vegas',
                orderTotal: 19.99,
                orders: [
                    {
                        id: 2,
                        product: 'Baseball',
                        total: 9.995
                    },
                    {
                        id: 3,
                        product: 'Bat',
                        total: 9.995
                    }
                ]
            },
            {
                id: 3,
                joined: '1944-06-15',
                name: 'Tina',
                city: 'New York',
                orderTotal: 44.99,
                orders: [
                    {
                        id: 4,
                        product: 'Headphones',
                        total: 44.99
                    }
                ]
            },
            {
                id: 4,
                joined: '1995-03-28',
                name: 'Dave',
                city: 'Seattle',
                orderTotal: 101.50,
                orders: [
                    {
                        id: 5,
                        product: 'Kindle',
                        total: 101.50
                    }
                ]
            }
        ];

        $scope.orderByMe = function (propName) {

            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;

        }
    };

    // to ensure $scope parm isn't minified, inject it magically.
    CustomerController.$inject = ['$scope'];

    myApp.controller('CustomerController', CustomerController);



}());