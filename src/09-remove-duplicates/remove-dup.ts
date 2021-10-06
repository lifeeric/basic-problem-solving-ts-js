/**
Question:  https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/
  */

export const removeDuplicates = (nums: number[]): void => {
  nums?.forEach((element: number, idx: number) => {
    nums.splice(idx, nums.lastIndexOf(element) - idx);
  });
};
