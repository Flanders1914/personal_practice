/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
98. Validate Binary Search Tree
判断是否为BST树
注意：不能只判断 left < root < right
思路：区间法
判断每个key是否在相应的区间内，区间上下限从父节点继承
向左走更新上限，向右走更新下限
还有一种中序遍历法
*/
var isValidBST = function(root, max, min) {
    if (root == null) return true;

    let key = root.val;
    
    if (max !== undefined && key >= max) return false;
    if (min !== undefined && key <= min) return false;

    if (isValidBST(root.left, key, min) && isValidBST(root.right, max, key)) {
        return true;
    }
    else return false;
};