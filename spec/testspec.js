var app = require('../script.js'); //загружаем файл


describe("unit tests", function() {
  it("first unit test", function() {
  	// prepare
  	var a;

  	// act
  	a = app(2,3);
  	// assert
  	expect(a).toBe(8);

  });
  it("second unit test", function() {
  	// prepare
  	var b;

  	// act
  	b = app(1,0);
  	// assert
  	expect(b).toBe(1);

  });
  it("therd unit test", function() {
  	// prepare
  	var c;

  	// act
  	c = app(1,-9);
  	// assert
  	expect(c).toBe(1);

  });
});