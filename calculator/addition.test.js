const addition = require(__dirname + "/addition.js");

test("Test addition of two numbers: ", () => {
    expect(addition(2,50)).toBe(52)
    expect(addition(2,5)).toBe(7)
    expect(addition(-2,50)).toBe(48)
    expect(addition(2,-5)).toBe(-3)
    expect(addition(2,0)).toBe(2)
    expect(addition(-2,-5)).toBe(-7)
    expect(addition(0,0)).toBe(0)
    expect(addition(-0,-12)).toBe(-12)
})

