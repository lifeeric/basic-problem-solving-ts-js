const { sortedArrayToBalanceBST } = require("./conver-balance-bst");

test("should return [0,-3,9,-10,null,5]", () => {
  expect(sortedArrayToBalanceBST([-10, -3, 0, 5, 9])).toEqual(
    expect.objectContaining({
      left: {
        left: { left: null, right: null, value: -10 },
        right: null,
        value: -3,
      },
      right: {
        left: { left: null, right: null, value: 5 },
        right: null,
        value: 9,
      },
      value: 0,
    })
  );
});
