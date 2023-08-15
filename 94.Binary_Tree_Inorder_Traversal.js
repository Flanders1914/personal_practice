/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
94. Binary Tree Inorder Traversal
二叉树的中序遍历，很简单
注意英文 
inorder 中序
preorder 前序
postorder 后序
*/
var inorderTraversal = function(root) {
    const ans = [];
    const search = function(node){
        if (node == null) return;
        search(node.left);
        ans.push(node.val);
        search(node.right);
        return;
    }
    search(root);
    return ans;
};