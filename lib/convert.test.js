const converter = require('./convert')

test("converts 4 to 4", () => {
  expect(converter.convert(4,4)).toBe(16)
})

test("converts 0 to 4", () => {
  expect(converter.convert(0,4)).toBe(0)
})

test("toMoney converts to float", () => {
  expect(converter.toMoney(2)).toBe("2.00")
})

test("toMoney converts string", () => {
  expect(converter.toMoney("2")).toBe("2.00")
})