/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
226. Invert Binary Tree
思路：利用递归并在每一层调用交换左右子树
 */
var invertTree = function(root) {
    let makeInvert = function(root) {
        if (root == null) return
        let tempo = root.left;
        root.left = root.right;
        root.right = tempo;
        makeInvert(root.left);
        makeInvert(root.right);
    }
    makeInvert(root);
    return root;
};