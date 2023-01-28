var assert = require("assert");
let calculator = require("../app/calculator");

describe("Calculate", function () {
    describe("Addition", function () {
        let result = calculator.add(5, 2);
        it("add(5, 2) expected result 7 PASS", function () {
            assert.equal(result, 7);
        });

        it("add(5, 2) expected result 8 FAIL", function () {
            assert.equal(result, 8);
        });
    });

    describe("Subtraction", function () {
        let result = calculator.sub(5, 2);
        it("sub(5, 2) expected result 3 PASS", function () {
            assert.equal(result, 3);
        });

        it("sub(5,2) expected result 5 FAIL", function () {
            assert.equal(result, 5);
        });
    });

    describe("Multiply", function () {
        let result = calculator.mul(5, 2);
        it("mul(5, 2) expected result 10 PASS", function () {
            assert.equal(result, 10);
        });

        it("mul(5,2) expected result 12 FAIL", function () {
            assert.equal(result, 12);
        });
    });

    describe("Division", function () {
        let result = calculator.div(10, 2);
        it("div(10, 2) expected result 5 PASS", function () {
            assert.equal(result, 5);
        });

        it("div(10,2) expected result 2 FAIL", function () {
            assert.equal(result, 2);
        });
    });
});
