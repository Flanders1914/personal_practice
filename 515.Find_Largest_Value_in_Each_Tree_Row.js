/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
515. Find Largest Value in Each Tree Row
思路 BFS
 */
var largestValues = function(root) {
    if (root === null) return [];
    let cache = [root];
    let res = [];
    while (cache.length) {
        let next = [];
        let max = -Number.MAX_VALUE;
        for (let node of cache) {
            max = Math.max(max, node.val);
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        res.push(max);
        cache = next;
    }
    return res;
};