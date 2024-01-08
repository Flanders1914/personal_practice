/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
938. Range Sum of BST
利用BST性质简单的递归
 */
var rangeSumBST = function(root, low, high) {
    if (!root) return 0;
    if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    } else if (root.val > high) {
        return rangeSumBST(root.left, low, high);
    } else {
        return root.val + rangeSumBST(root.left, low, high) +
        rangeSumBST(root.right, low, high);
    }
};
