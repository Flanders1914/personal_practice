/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
637. Average of Levels in Binary Tree
水题，BFS
 */
var averageOfLevels = function(root) {
    let res = [];
    let cache = [root];
    while (cache.length) {
        let total = 0;
        let next = [];
        for (let node of cache) {
            total += node.val;
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        res.push(total/cache.length);
        cache = next;
    }
    return res;
};