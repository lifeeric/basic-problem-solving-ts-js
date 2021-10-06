/**
 *  Question: https://leetcode.com/problems/two-sum/
 */

export const twoSum = (nums: number[], target: number): number[] | null => {
  for (let i: number = 0; nums.length > i; ++i) {
    let firstNum: number = nums[i];

    let restNum: number = target - firstNum;
    let restNumIndex: number = nums.lastIndexOf(restNum);

    if (nums.includes(restNum) && i !== restNumIndex) return [i, restNumIndex];
  }

  return null;
};
