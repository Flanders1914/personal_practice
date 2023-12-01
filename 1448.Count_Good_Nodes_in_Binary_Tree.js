/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
1448. Count Good Nodes in Binary Tree
思路：先序遍历
 */
var goodNodes = function(root) {
    let res = 0;
    const search = function(root, preMax) {
        if (!root) return;
        if (root.val >= preMax) {
            res++;
            preMax = root.val;
        }
        search(root.left, preMax);
        search(root.right, preMax);
    };
    search(root, -Number.MAX_VALUE);
    return res;
};