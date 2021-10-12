/**
 * Question: https://leetcode.com/problems/merge-sorted-array/submissions/
 */

export const mergeAndReturnSortedArr = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) => {
  while (n) nums1[m++] = nums2[--n];
  nums1.sort((a, b) => a - b);
};
