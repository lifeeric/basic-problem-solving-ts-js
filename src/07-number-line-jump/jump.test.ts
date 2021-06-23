const { numberLineJump } = require("./jump");

test("0 3 4 2 should return true cause jump meet", () => {
  expect(numberLineJump(0, 3, 4, 2)).toBe("YES");
});
