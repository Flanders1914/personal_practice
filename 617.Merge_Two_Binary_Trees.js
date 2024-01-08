/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
617. Merge Two Binary Trees
思路：利用递归，如下所示
 */
var mergeTrees = function(root1, root2) {
    if (root1 && root2) {
        let node = new TreeNode(root1.val + root2.val);
        node.left = mergeTrees(root1.left, root2.left);
        node.right = mergeTrees(root1.right, root2.right);
        return node;
    } else if (root1) {
        let node = new TreeNode(root1.val);
        node.left = mergeTrees(root1.left, null);
        node.right = mergeTrees(root1.right, null);
        return node;
    } else if (root2) {
        let node = new TreeNode(root2.val);
        node.left = mergeTrees(root2.left, null);
        node.right = mergeTrees(root2.right, null);
        return node;
    } else return null;
};