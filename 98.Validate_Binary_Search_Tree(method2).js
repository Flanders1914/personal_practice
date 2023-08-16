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
思路：中序遍历法
BST树的中序是一个单调递增的数组，根据这个性质可以判断树
是否为BST树
还有一种区间法
*/
var isValidBST = function(root) {
    
    const inorder_traversal = function(root, arr) {
        if (root == null) return;
        inorder_traversal(root.left, arr);
        arr.push(root.val);
        inorder_traversal(root.right, arr);
        return;
    }

    const arr = [];
    inorder_traversal(root, arr);
    //判断是否为升序
    for (let i = 1; i <= arr.length -1; i++) {
        if (arr[i] > arr[i -1]) continue;
        else return false;
    }

    return true;
};