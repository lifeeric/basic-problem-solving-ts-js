/**
 * Question: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */

type EmptyObject = Record<any, any>;

class TreeNode {
  value: number;
  left: EmptyObject | null;
  right: EmptyObject | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const sortedArrayToBalanceBST = (nums: number[]) => {
  if (!nums.length) return null;

  const midpoint: number = Math.floor(nums.length / 2);

  const tree = new TreeNode(nums[midpoint]);
  nums.splice(midpoint, 1);

  const rightNode = sortedArrayToBalanceBST(nums.splice(midpoint));
  const leftNode = sortedArrayToBalanceBST(nums);

  tree.left = leftNode;
  tree.right = rightNode;

  return tree;
};
