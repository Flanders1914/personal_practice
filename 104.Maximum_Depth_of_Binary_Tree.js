/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
104. Maximum Depth of Binary Tree
二叉树最大深度
方法：和水平遍历相同
*/
var maxDepth = function(root) {
    if (root === null) return 0;
    let cache = [root];
    let layer = 0;

    while (cache.length !== 0) {
        let next = [];
        layer++;
        for (let node of cache) {
            if (node.left !== null) next.push(node.left);
            if (node.right !== null) next.push(node.right);
        }
        cache = next;
    }

    return layer;
};