const { countApplesAndOranges } = require("./appleAndOrange");

test("return total fruits of [1,1] apples and oranges", () => {
  expect(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])).toEqual([
    1, 1,
  ]);
});
