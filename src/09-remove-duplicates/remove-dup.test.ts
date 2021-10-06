const { removeDuplicates } = require("./remove-dup");

test("it should modify array without duplicated element", () => {
  const sortedArray: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  removeDuplicates(sortedArray);
  expect(sortedArray).toEqual([0, 1, 2, 3, 4]);
});
