const convertToF = require("./ConvertCelsiustoFahrenheit");

const dataProvider = [
  [-30, -22],
  [-10, 14],
  [0, 32],
  [20, 68],
];

test.each(dataProvider)(
  "convertToF(%i)は%iを返す必要があります",
  (input, expected) => {
    expect(convertToF(input)).toBe(expected);
  },
);
