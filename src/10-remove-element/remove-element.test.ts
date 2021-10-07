const { removeElment } = require("./remove-element");

test("it should reutrn [2,2] from [3,2,2,3] as target remove element is 3", () => {
  const arr = [3, 2, 2, 3];
  removeElment(arr, 3);
  expect(arr).toEqual([2, 2]);
});

test("it should reutrn [0,1,0,3,2] from [0,1,2,2,3,0,4,2] as target remove element is 2", () => {
  const arr = [0, 1, 2, 2, 3, 0, 4, 2];
  removeElment(arr, 2);
  expect(arr).toEqual([0, 1, 3, 0, 4]);
});
