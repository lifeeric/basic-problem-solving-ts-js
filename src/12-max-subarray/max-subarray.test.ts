const { maxSubArray } = require("./max-subarray");

test("it should return the max sub array is 6", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});

test("it should return the max sub array is 23", () => {
  expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
});
