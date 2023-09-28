/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
199. Binary Tree Right Side View
思路：对二叉树进行遍历 顺序为 根节点——右树——左树
记录两个变量 bottom 即 ans 中记录的最深节点深度+1
和 depth 当前节点的深度
当 depth >= bottom 时 ans记录该节点且bottom++
 */
var rightSideView = function(root) {
    let ans = [];
    let bottom = 0;

    let search = function(root, depth) {
        if (root == null) return;
        if (depth >= bottom) {
            ans.push(root.val);
            bottom++;
        }
        search(root.right, depth+1);
        search(root.left, depth+1);
    };

    search(root, 0);
    return ans;
};