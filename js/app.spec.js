describe("app: ", function() {

  it("runs the test runner", function() {
    expect(undefined).not.toBeDefined();
  });

  describe("controller: ", function() {
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

  }); // controller

  describe("directive: ", function() {
    var $scope, $compile, crtl;


    describe("basic directive: ", function() {
      var element;

      beforeEach( function() {
        module('directives');
        inject(function(_$rootScope_, _$compile_) {
          $scope = _$rootScope_.$new(); // inject the testing singleton
          $compile = _$compile_
        });
      });

      beforeEach(function() {
        // wrap directive in div and use fully qualified html
        element = angular.element("<div><basic-directive></basic-directive></div>");
        var linkFunction = $compile(element); // compile html
        linkFunction($scope); // link to scope
        $scope.$apply(); // run the scope
      });

      it("loads from template", function() {
        var el = element.find('template-element');
        expect(el).toBeDefined();
      });

    }); // basic directive

    describe("container directive: ", function() {
      var element;

      beforeEach( function() {
        module('directives');
        inject(function(_$rootScope_, _$compile_) {
          $scope = _$rootScope_.$new(); // inject the testing singleton
          $compile = _$compile_
        });
      });

      beforeEach(function() {
        // wrap directive in div and use fully qualified html
        element = angular.element("<div><contained-controller-directive></contained-controller-directive></div>");
        var linkFunction = $compile(element); // compile html
        linkFunction($scope); // link to scope
        $scope.$apply(); // run the scope
      });

      it("loads from template", function() {
        var el = element.find('div')[0];
        var name = el.attributes['name'].value;
        expect(el).toBeDefined();
        expect(name).toBe('template-element');
      });

      it("loads value from controller scope", function() {
        var el = element.find('div')[0];
        var name = el.attributes['name'].value;
        expect(el).toBeDefined();
        expect(name).toBe('template-element');
        expect(el.textContent).toBe('controller-value');
      });

    }); // contained directive

    describe("same module directive: ", function() {
      var element;

      beforeEach( function() {
        module('directives');
        inject(function(_$rootScope_, _$compile_) {
          $scope = _$rootScope_.$new(); // inject the testing singleton
          $compile = _$compile_
        });
      });

      beforeEach(function() {
        // wrap directive in div and use fully qualified html
        element = angular.element("<div><same-module-directive></same-module-directive></div>");
        var linkFunction = $compile(element); // compile html
        linkFunction($scope); // link to scope
        $scope.$apply(); // run the scope
      });

      it("loads from template", function() {
        var el = element.find('div')[0];
        var name = el.attributes['name'].value;
        expect(el).toBeDefined();
        expect(name).toBe('template-element');
      });

      it("loads value from controller scope", function() {
        var el = element.find('div')[0];
        var name = el.attributes['name'].value;
        expect(el).toBeDefined();
        expect(name).toBe('template-element');
        expect(el.textContent).toBe('controller-value');
      });

    }); // same module directive

    describe("different module directive: ", function() {
      var element;

      beforeEach( function() {
        module('controllers');
        module('directives');
        inject(function(_$rootScope_, _$compile_) {
          $scope = _$rootScope_.$new(); // inject the testing singleton
          $compile = _$compile_
        });
      });

      beforeEach(function() {
        // wrap directive in div and use fully qualified html
        element = angular.element("<div><different-module-directive></different-module-directive></div>");
        var linkFunction = $compile(element); // compile html
        linkFunction($scope); // link to scope
        $scope.$apply(); // run the scope
      });

      it("loads from template", function() {
        var el = element.find('div')[0];
        var name = el.attributes['name'].value;
        expect(el).toBeDefined();
        expect(name).toBe('template-element');
      });

      it("loads value from controller scope", function() {
        var el = element.find('div')[0];
        var name = el.attributes['name'].value;
        expect(el).toBeDefined();
        expect(name).toBe('template-element');
        expect(el.textContent).toBe('controller-value');
      });

    }); // different module directive


  }); // directive


});// describe app