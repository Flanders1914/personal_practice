/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
513. Find Bottom Left Tree Value
宽搜
 */
var findBottomLeftValue = function(root) {
    let memo = [root];
    while (true) {
        let next = [];
        let res = memo[0];
        for (let node of memo) {
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        if (next.length === 0) return res.val;
        memo = next;
    }
};