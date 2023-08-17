/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
100. Same Tree
检查两个树是否相同
*/
var isSameTree = function(p, q) {
    if (p == null || q == null) {
        if (p == null && q == null) return true;
        else return false;
    }
    if (p.val == q.val) {
        if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
            return true;
        } else return false;
    } else return false;
};