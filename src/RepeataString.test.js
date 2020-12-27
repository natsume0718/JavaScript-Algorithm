const repeatStringNumTimes = require("./RepeataString");

const dataProvider = [
  ["*", 3, "***"],
  ["hoge", 0, ""],
  ["a", "10", "aaaaaaaaaa"],
];

test.each(dataProvider)(
  "repeatStringNumTimes(%s,%s)は%sを返す必要があります",
  (input, input2, expected) => {
    expect(repeatStringNumTimes(input, input2)).toBe(expected);
  },
);

test(`repeatStringNumTimes()はrepeatを使用していけません`, () => {
  const result = repeatStringNumTimes
    .toString()
    .replace(repeatStringNumTimes.name, "");
  expect(result.includes("repeat")).toBeFalsy();
});
