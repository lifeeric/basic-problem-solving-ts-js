const { twoSum } = require("./two-sum");

test("it should return [0,1] indices from [2,7,11,15] when 2+7", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("it should return [1, 2] indices from [3,2,4] when 2+4", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
