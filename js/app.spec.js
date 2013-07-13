describe("app: ", function() {

  it("runs the test runner", function() {
    expect(undefined).not.toBeDefined();
  });

  describe("controller: ", function () {
    var $scope, crtl;

    beforeEach( function() {
      module('controllers');
      inject(function(_$rootScope_, $controller) {
        $scope = _$rootScope_.$new(); // inject the testing singleton
        ctrl = $controller('AppCtrl', {$scope:$scope});
      });
    });

    it("setup builds scope and controller", function() {
      expect(ctrl).toBeDefined();
      expect($scope).toBeDefined();
      expect($scope._evaluated).toBeTruthy();
    });

  }); // controllers

});// describe app