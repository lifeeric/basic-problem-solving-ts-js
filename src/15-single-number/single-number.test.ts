const { singleNumber } = require("./single-number");

test("should return 4", () => {
  expect(singleNumber([4, 1, 2, 1, 2])).toEqual([4]);
});

test("should return 1", () => {
  expect(singleNumber([2, 2, 1])).toEqual([1]);
});
