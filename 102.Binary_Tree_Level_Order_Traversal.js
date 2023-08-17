/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
102. Binary Tree Level Order Traversal
水平遍历二叉树
思路：用cache存储当前层的非空节点，用next存储下一层的非空节点，
cache遍历完成后，cache = next while 循环到cache为空
注意：输入数据可能 root = null 需要单独处理
 */
var levelOrder = function(root) {
    if (root == null) return [];
    let cache = [root];
    let ans = [];
    let layer = -1;

    while ( cache.length !== 0) {
        let next = [];
        ans.push([]);
        layer++;
        for (let node of cache) {
            ans[layer].push(node.val);
            if (node.left !== null) next.push(node.left);
            if (node.right !== null) next.push(node.right);
        }
        cache = next;
    }

    return ans;
};

let tree = {val : 1, left : {val : 2, left : null, right : null}, right : {val : 3, left : null, right : null}};
for (let row of levelOrder(tree)) console.log(row);
