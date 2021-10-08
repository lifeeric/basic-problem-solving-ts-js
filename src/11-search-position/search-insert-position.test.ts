const { searchInsert } = require("./search-insert-position");

test("it should return 2 index from [1,3,5,6] cause target is 5", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
});

test("it should return 1 index from [1, 3, 5, 6] cause target is 2", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
});

test("it should return 4 index from [1, 3, 5, 6] cause target is 7", () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4);
});

test("it should return 0 index from [1] cause target is 0", () => {
  expect(searchInsert([1], 0)).toEqual(0);
});
