// const { expect } = require("@jest/globals");
// const { test } = require("picomatch");

const multiplication = require(__dirname + "/../src/multiplication.js")


/**
 * Testing multiplication
 * 
 *
 */
test("Test multiplication of two numbers: ", () => {
    expect(multiplication(10,20)).toBe(200)
    expect(multiplication(1,20)).toBe(20)
    expect(multiplication(-0,20)).toBe(-0)
    expect(multiplication(0,-10)).toBe(0)
    expect(multiplication(-1,-20)).toBe(20)
    expect(multiplication(-1,20)).toBe(-20)

});
