/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
404. Sum of Left Leaves
方法：DFS 需要传递一个参数表明该节点是否为left
 */
var sumOfLeftLeaves = function(root) {
    let ans = 0;
    let findLeftLeaves = function(root, isLeft) {
        if (!root.left && !root.right && isLeft) ans += root.val;
        else {
            if (root.left) findLeftLeaves(root.left, true);
            if (root.right) findLeftLeaves(root.right, false);
        }
    };
    findLeftLeaves(root, false);
    return ans;
};