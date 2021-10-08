/**
 * Question: https://leetcode.com/problems/search-insert-position/submissions/
 */

export const searchInsert = (nums: number[], target: number): number => {
  return searchBinaryHelper(nums, target, 0, nums.length - 1);
};

const searchBinaryHelper = (
  nums: number[],
  target: number,
  left: number,
  right: number
): number => {
  if (left > right) return left;

  const mid: number = Math.floor((left + right) / 2);
  if (target === nums[mid]) return mid;
  else if (target < nums[mid])
    return searchBinaryHelper(nums, target, left, mid - 1);
  else return searchBinaryHelper(nums, target, mid + 1, right);
};
