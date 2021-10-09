/**
 * Question: https://leetcode.com/problems/maximum-subarray/submissions/
 */

export const maxSubArray = (nums: number[]): number => {
  let current_sum: number = nums[0];
  let max_sum: number = nums[0];

  for (let i: number = 1; nums.length > i; ++i) {
    current_sum = Math.max(current_sum + nums[i], nums[i]);
    max_sum = Math.max(current_sum, max_sum);
  }

  return max_sum;
};
