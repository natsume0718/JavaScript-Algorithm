const factorialize = require("./FactorializeNumber");

const dataProvider = [
  [5, 120],
  [0, 1],
  [20, 2432902008176640000],
  [10, 3628800],
];

test.each(dataProvider)(
  "factorialize(%i)は%iを返す必要があります",
  (input, expected) => {
    expect(factorialize(input)).toBe(expected);
  },
);

test("factorialize(5)は数値を返す必要があります", () => {
  expect(typeof factorialize(5)).toBe("number");
});
