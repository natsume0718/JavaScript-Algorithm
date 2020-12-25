const confirmEnding = require("./ConfirmtheEndingTargetStr");

const dataProvider = [
  ["Bastian", "n", true],
  ["Congratulation", "on", true],
  ["Connor", "n", false],
  [
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification",
    false,
  ],
];

test.each(dataProvider)(
  "confirmEnding(%s,%s)は%sを返す必要があります",
  (input, input2, expected) => {
    expect(confirmEnding(input, input2)).toBe(expected);
  },
);

test(`confirmEnding()はendsWithを使用していけません`, () => {
  const result = confirmEnding.toString();
  expect(result.includes("endsWith")).toBeFalsy();
});
