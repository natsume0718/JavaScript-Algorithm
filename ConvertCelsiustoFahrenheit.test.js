const convertToF = require("./ConvertCelsiustoFahrenheit");

test("convertToF(-30)は-22を返す必要があります", () => {
  expect(convertToF(-30)).toBe(-22);
});
test("convertToF(-10)は14を返す必要があります", () => {
  expect(convertToF(-10)).toBe(14);
});
test("convertToF(0)は32を返す必要があります", () => {
  expect(convertToF(0)).toBe(32);
});
test("convertToF(20)は68を返す必要があります", () => {
  expect(convertToF(20)).toBe(68);
});
