/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
144. Binary Tree Preorder Traversal
二叉树的前序遍历，很简单
也可以用栈实现
*/
var preorderTraversal = function(root) {
    let ans = [];
    const search = function(root) {
        if (!root) return;
        ans.push(root.val);
        search(root.left);
        search(root.right);
        return;
    };
    search(root);
    return ans;
};