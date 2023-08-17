/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 101. Symmetric Tree
检查树是否是对称的，只需检查root.left 和 root.right 是否对称即可
方法与检查两个数是否相同类似
 */
var isSymmetric = function(root) {
    const isSymmetricTree = function(p, q) {
        if (p == null || q == null) {
            if (p == null && q == null) return true;
            else return false;
        }

        if (p.val !== q.val) return false;
        if (isSymmetricTree(p.left, q.right) && isSymmetricTree(p.right, q.left)) {
            return true;
        } else return false;
    };
    return isSymmetricTree(root.left, root.right);
};