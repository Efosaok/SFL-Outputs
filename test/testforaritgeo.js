const assert = require("chai").assert;
const should = require("chai").should();
const expect = require("chai").expect;
const app = require("../app/aritgeo.js");

describe("Test for array is a geometric sequence",()=>{
	it("should return Geometric when function is passed [1,3,9]", ()=>{
		expect(app.aritGeo([25,5,1])).to.equal("Geometric")
	});

	it("typeof(app.aritgeo([2,6,18])) should be a string", ()=>{
		typeof(app.aritGeo([2,6,18,54,162,486,1458])).should.be.a('string');
	});

	it("should return Geometric when function is passed [3,6,12,24]", ()=>{
		assert.equal(app.aritGeo([3,6,12,24,48,96,192,384]), "Geometric");
	})

	it("should return Geometric when function is passed [1,4,16,64]", ()=>{
		assert.equal(app.aritGeo([1,4,16,64,256,1024]), "Geometric");
	})

	it("should return Geometric when function is passed [3,9,18,36]", ()=>{
		assert.equal(app.aritGeo([3,9,27,81,243,729]), "Geometric");
	})
});

describe("Test for array is an Arithmetic sequence",()=>{
	it("should return Arithmetic when function is passed [50,48,46,44,42,40,38,36,34,32,30,28,26,24]", ()=>{
		expect(app.aritGeo([50,48,46,44,42,40,38,36,34,32,30,28,26,24])).to.equal("Arithmetic")
	});

	it("typeof(app.aritgeo([1,4,7,10,13,16,19,22,25,28,31,34,37,40])) should be a string", ()=>{
		typeof(app.aritGeo([1,4,7,10,13,16,19,22,25,28,31,34,37,40])).should.be.a('string');
	});

	it("should return Arithmetic when function is passed [40,37,34,31,28,25,22,19,16,13,10,7,4,1]", ()=>{
		assert.equal(app.aritGeo([40,37,34,31,28,25,22,19,16,13,10,7,4,1]), "Arithmetic");
	})

	it("should return Arithmetic when function is passed [10,15,20,25,30,35,40,45,50,55,60,65,70,75,80]", ()=>{
		assert.equal(app.aritGeo([10,15,20,25,30,35,40,45,50,55,60,65,70,75,80]), "Arithmetic");
	})

	it("should return Arithmetic when function is passed [4,10,16,22,28,34,40,46,52]", ()=>{
		assert.equal(app.aritGeo([4,10,16,22,28,34,40,46,52]), "Arithmetic");
	})
});

describe("Test for an empty Array",()=>{
	it("should return 0 when function is passed [1,3,9]", ()=>{
		expect(app.aritGeo([])).to.equal(0)
	});

	it("typeof(app.aritgeo([])) should be a string", ()=>{
		typeof(app.aritGeo([])).should.be.a('number');
	});

	it("should return 0 when function is passed []", ()=>{
		assert.equal(app.aritGeo([]), 0);
	})
});

describe("Test for an array that is neither Arithmetic or Geometric", ()=>{
	it("should return -1 when function is passed [9,657,98,7,2,56,21,34]", ()=>{
		expect(app.aritGeo([9,657,98,7,2,56,21,34])).to.equal(-1)
	});
	it("should return -1 when function is passed [0,467,76,23,6452,98]", ()=>{
		expect(app.aritGeo([0,467,76,23,6452,98])).to.equal(-1)
	});
	it("should return 0 when function is passed [1,3,9]", ()=>{
		app.aritGeo([6,56,87,3,3,21,45]).should.be.a("number")
	});
})