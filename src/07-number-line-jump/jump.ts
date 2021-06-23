/**
 * hackerrank https://www.hackerrank.com/challenges/kangaroo/
 */

export const numberLineJump = (
  x1: number,
  v1: number,
  x2: number,
  v2: number
): string => {
  if (x1 < x1 && v1 < v2 && v1 === v2) return "NO";
  else if ((x1 - x2) % (v1 - v2) === 0) return "YES";
  return "NO";
};
