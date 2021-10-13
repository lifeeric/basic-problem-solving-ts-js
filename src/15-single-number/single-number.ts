/**
 * Question: https://leetcode.com/problems/single-number/submissions/
 */

type EmptyObject = Record<any, number>;

export const singleNumber = (nums: number[]) => {
  const obj: EmptyObject = {};

  for (let key of nums) {
    key in obj ? delete obj[key] : (obj[key] = 1);
  }

  // converting string into number
  return Object.keys(obj).map((item) => +item);
};

// Bitwise Operator solution
// export const singleNumber = (nums: number[]) => {
//   return nums.reduce((accu, value) => accu ^ value);
// };
