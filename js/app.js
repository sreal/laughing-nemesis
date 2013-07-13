var AdtApp = AdtApp || {};
AdtApp.Modules = {};

AdtApp.Modules
  .controllers = angular.module('controllers', [])
  .controller('AppCtrl',[
    /*****/ '$scope',
    function($scope) {
      $scope._evaluated = true;
    }]
  ) // AppCtrl
;