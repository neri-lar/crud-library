'use strict'

var appLibrary = angular.module('appLibrary', ['ngRoute']);

appLibrary.controller('mainCtrl', ['$scope', function ($scope) {

    $scope.message = 'JN-library';
}]);