/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
108. Convert Sorted Array to Binary Search Tree
从排序数组生成 height-balanced BST
比较简单的递归即可，下面的程序自解释
 */
var sortedArrayToBST = function(nums) {
    const makeTree = function(l, r) {
        if (l > r) return null;
        let mid = Math.floor((l+r)/2);
        let node = new TreeNode(nums[mid]);
        node.left = makeTree(l, mid-1);
        node.right = makeTree(mid+1, r);
        return node;
    };
    return makeTree(0, nums.length -1);
};