const { mergeAndReturnSortedArr } = require("./merge-sorted-arr");

test("should return [1,2,2,3,5,6]", () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const nums2 = [2, 5, 6];
  mergeAndReturnSortedArr(nums1, 3, nums2, 3);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test("should return [1]", () => {
  const nums1 = [1];
  const nums2: any[] = [];
  mergeAndReturnSortedArr(nums1, 1, nums2, 0);
  expect(nums1).toEqual([1]);
});
