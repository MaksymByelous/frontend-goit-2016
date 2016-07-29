var app = require('../script/script.js');

describe("make a pow", function() {
  it("should make 2 in 3", function() {
    //prepare
    var result;
    //act
    result = app(2, 3);
    //assert
    expect(result).toBe(8);
  });
  it("should make 2.7 in 3.9", function() {
    //prepare
    var result;
    //act
    result = app(2.7, 3.9);
    //assert
    expect(result).toBe(53.144100000000016);
  });
  it("should make 1234 in 32", function() {
    //prepare
    var result;
    //act
    result = app(1234, 32);
    //assert
    expect(result).toBe(8.357667905216081e+98);
  });
});
