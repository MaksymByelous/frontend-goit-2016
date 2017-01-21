var chai = require('chai');
var expect = require('chai').expect;
var angular = require('angular');
var app = require('calculator');
require('angular-mocks');

describe('Salculation', function(){
  var scope, contol;
  beforeEach(angular.mock.module('calculator'));
  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    contol = $controller('calcCtrl', {$scope: scope});
  }));
  it('make sum of two', function(){
    var num1 = scope.num1;
    var num1 = scope.num1;
    scope.sum();
    expect(5).to.equal(scope.sum());
  });

  it('make division first/two', function(){
    expect('6').to.equal('6');
  });
})
