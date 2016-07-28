var app = require('../js/dist/script.js');

describe("app", function() {
  it("should say hello", function() {
    //prepare
    var result;
    console.log('app', app);
    //act
    var result = app.sayHello('vasya');

    //assert
    expect(result).toBe('Hello, vasya');
  });
});
