/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 107. Binary Tree Level Order Traversal II
思路：还是水平遍历二叉树的思路(有点像宽搜)
只要先把每一层储存在栈中，最后逐个出栈构成答案即可
 */
var levelOrderBottom = function(root) {
    let stack = [], ans = [];
    let layer = -1;
    if (root == null) return [];
    let cache = [root];

    while (cache.length !== 0) {
        layer++;
        stack.push([]);
        let next = [];
        for (node of cache) {
            stack[layer].push(node.val);
            if (node.left !== null) next.push(node.left);
            if (node.right !== null) next.push(node.right);
        }
        cache = next;
    }

    while (stack.length != 0) {
        ans.push(stack.pop());
    }

    return ans;
};