/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
222. Count Complete Tree Nodes
思路：遍历所有的节点
*/
var countNodes = function(root) {
    if (root == null) return 0;
    else return (countNodes(root.left)+countNodes(root.right)+1);
};