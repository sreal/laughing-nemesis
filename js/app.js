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
  .controller('ModuleOneCtrl',[
    /*****/ '$scope',
    function($scope) {
      $scope.value = "controller-value";
    }]
  ) // ModuleOneCtrl
;
AdtApp.Modules
  .directives = angular.module('directives', [])
  .directive('basicDirective', function() {
    return {
      restrict: "E",
      template:"<div name='template-element'><div>",
      link: function(scope, elem, attr) { /*do nothing*/}
    }
  })
  .directive('containedControllerDirective', function() {
    return {
      restrict: "E",
      scope: {
        value: "@"
      },
      replace: true,
      controller: ['$scope', function($scope){ $scope.value = 'controller-value' }] ,
      template:"<div name='template-element'><div>",
      link: function(scope, elem, attr) {
        var el = elem.find('div')[0];
        el.innerHTML = scope.value
      }
    }
  }) // containedControllerDirective
  .controller('SameModuleCtrl', [
    '$scope',
    function($scope) { $scope.value = 'controller-value' }
  ])
  .directive('sameModuleDirective', function() {
    return {
      restrict: "E",
      scope: {
        value: "@"
      },
      replace: true,
      controller: 'SameModuleCtrl',
      template:"<div name='template-element'><div>",
      link: function(scope, elem, attr) {
        var el = elem.find('div')[0];
        el.innerHTML = scope.value
      }
    }
  }) // sameModuleDirective
  .directive('differentModuleDirective', function() {
    return {
      restrict: "E",
      scope: {
        value: "@"
      },
      replace: true,
      controller: 'ModuleOneCtrl',
      template:"<div name='template-element'><div>",
      link: function(scope, elem, attr) {
        var el = elem.find('div')[0];
        el.innerHTML = scope.value
      }
    }
  });// sameModuleDirective
;
