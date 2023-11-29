/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
530. Minimum Absolute Difference in BST
思路：中序遍历
BST的中序遍历即为升序数列
 */
var getMinimumDifference = function(root) {
    let res = Number.MAX_VALUE;
    let pre = -1;
    let inOrder = function(root) {
        if (!root) return;
        inOrder(root.left);
        if (pre != -1) {
            res = Math.min(res, root.val-pre);
            pre = root.val;
        } else pre = root.val;
        inOrder(root.right);
    }
    inOrder(root);
    return res;
};