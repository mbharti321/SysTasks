const multiplication = require(__dirname + "/multiplication.js")

test("Test multiplication of two numbers: ", () => {
    expect(multiplication(10,20)).toBe(200)
    expect(multiplication(1,20)).toBe(20)
    expect(multiplication(-0,20)).toBe(-0)
    expect(multiplication(0,-10)).toBe(0)
    expect(multiplication(-1,-20)).toBe(20)
    expect(multiplication(-1,20)).toBe(-20)
})
