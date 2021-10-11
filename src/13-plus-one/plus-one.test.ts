const { plusOne } = require("./plus-one");

test("it should return [1,2,4] from [1,2,3]", () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});

test("it should return [1,0,0] from [9,9]", () => {
  expect(plusOne([9, 9])).toEqual([1, 0, 0]);
});
