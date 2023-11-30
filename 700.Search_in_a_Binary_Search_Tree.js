/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
700. Search in a Binary Search Tree
思路：简单的递归
 */
var searchBST = function(root, val) {
    if (!root) return null;
    if (root.val == val) return root;
    if (root.val > val) return searchBST(root.left, val);
    else return searchBST(root.right, val);
};