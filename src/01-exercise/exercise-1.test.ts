const { isEqualTo100 } = require("./exercise-1");

test("adds 1 + 2 to equal 3", () => {
  expect(isEqualTo100(99, 1)).toBe(true);
  expect(isEqualTo100(100, 0)).toBe(true);
  expect(isEqualTo100(108, 1)).toBe(false);
});
