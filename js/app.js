'use strict'

var appLibrary = angular.module('librosAPI', ['ngRoute']);

appLibrary.controller('mainCtrl', ['$scope', function ($scope) {

    $scope.message = 'JN-library';
}]);