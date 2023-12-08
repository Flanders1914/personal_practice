/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
606. Construct String from Binary Tree
水题，注意输出格式
 */
var tree2str = function(root) {
    if (!root) return '';
    let left = tree2str(root.left);
    let right = tree2str(root.right);
    if (left === '') {
        if (right === '') return root.val + '';
        else return root.val + `()(${right})`;
    }
    if (right === '') return root.val + `(${left})`;
    else return root.val + `(${left})(${right})`;
};