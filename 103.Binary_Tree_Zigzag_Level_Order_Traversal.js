/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
103. Binary Tree Zigzag Level Order Traversal
二叉树水平遍历，要求偶数层（root为0层）从左到右，奇数层从右到左
思路：生成下一层的cache时，利用栈让下一层的node倒序
注意：对于偶数层先left后right（左到右）对于奇数层先right后left（右到左）
 */
var zigzagLevelOrder = function(root) {
    if (root == null) return [];
    let cache = [root], next = [], ans = [];
    let layer = -1;

    while (cache.length !== 0) {
        let next = [];
        layer++;
        ans.push([]);
        for (let node of cache) {
            ans[layer].push(node.val);
            //注意对于偶数层，next先储存left后储存right，对于奇数层相反
            if (layer % 2 == 0) {
                if (node.left !== null) next.push(node.left);
                if (node.right !== null) next.push(node.right);
            }
            else {
                if (node.right !== null) next.push(node.right);
                if (node.left !== null) next.push(node.left);
            }
        }
        cache = [];
        while (next.length > 0) {
            cache.push(next.pop());
        }
    }

    return ans;
};