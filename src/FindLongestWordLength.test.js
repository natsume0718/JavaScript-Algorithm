const findLongestWordLength = require("./FindLongestWordLength");

const dataProvider = [
  ["The quick brown fox jumped over the lazy dog", 6],
  ["May the force be with you", 5],
  ["Google do a barrel roll", 6],
  ["What is the average airspeed velocity of an unladen swallow", 8],
];

test.each(dataProvider)(
  "findLongestWordLength(%s)は%sを返す必要があります",
  (input, expected) => {
    expect(findLongestWordLength(input)).toBe(expected);
  },
);

test("findLongestWordLength('The quick brown fox jumped over the lazy dog')は数値を返す必要があります", () => {
  expect(
    typeof findLongestWordLength(
      "The quick brown fox jumped over the lazy dog",
    ),
  ).toBe("number");
});
