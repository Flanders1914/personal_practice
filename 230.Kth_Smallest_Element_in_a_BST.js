/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
230. Kth Smallest Element in a BST
思路：中序遍历
count记录当前节点的顺序
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let search = function(root) {
        let ans;
        if (root.left) ans = search(root.left); //ans储存搜寻左树的返回值，若ans不是undefined说明找到了目标
        if (ans !== undefined) return ans;
        count++;
        if (count == k) return root.val;
        if (root.right) ans = search(root.right);
        if (ans !== undefined) return ans;
    };
    return search(root);
};