/**
 * Question: https://leetcode.com/problems/remove-element/submissions/
 */
export const removeElment = (nums: number[], val: number): void => {
  for (let i: number = 0; nums.length > i; ++i) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      --i;
    }
  }
};
