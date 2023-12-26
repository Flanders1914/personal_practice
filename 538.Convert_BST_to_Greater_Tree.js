/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
538. Convert BST to Greater Tree
思路：由于BST的中序遍历为单调增序列，根据这一性质我们反向使用中序遍历，并用
一个全局变量记录之前遍历过的即比当前值大的节点值的总和
 */
var convertBST = function(root) {
    let sum = 0;
    const dfs = function(root) {
        if (!root) return;
        dfs(root.right);
        root.val += sum;
        sum = root.val;
        dfs(root.left);
    };
    dfs(root);
    return root;
};