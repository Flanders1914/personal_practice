/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 1161. Maximum Level Sum of a Binary Tree
思路：BFS
 */
var maxLevelSum = function(root) {
    let cache = [root];
    let max = -Number.MAX_VALUE, res = 0;
    let layer = 1;

    while (cache.length) {
        let next = [];
        let sum = 0;
        for (let node of cache) {
            sum += node.val;
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        if (sum > max) {
            max = sum;
            res = layer;
        }
        layer++;
        cache = next;
    }
    return res;
};