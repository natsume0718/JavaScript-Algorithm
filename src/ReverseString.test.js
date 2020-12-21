const reverseString = require("./ReverseString");

const dataProvider = [
  ["hello", "olleh"],
  ["Howdy", "ydwoH"],
  ["Greetings from Earth", "htraE morf sgniteerG"],
  ["20", "02"],
];

test.each(dataProvider)(
  "reverseString(%s)は%sを返す必要があります",
  (input, expected) => {
    expect(reverseString(input)).toBe(expected);
  },
);
