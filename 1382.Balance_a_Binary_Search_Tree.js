/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
1382. Balance a Binary Search Tree
思路：我们先用in order traversal 将BST树转换为一个数组
通过这个数组我们reconstruct一个树，严格按照二分法递归构建
 */
var balanceBST = function(root) {
    if (!root) return root;
    let in_order = [];
    const in_order_traversal = function (root) {
        if (!root) return;
        in_order_traversal(root.left);
        in_order.push(root);
        in_order_traversal(root.right); 
    };
    in_order_traversal(root);

    const reconstruct = function(arr, l, r) {
        if (l > r) return null;
        let mid = (l + r) >> 1;
        arr[mid].left = reconstruct(arr, l, mid-1);
        arr[mid].right = reconstruct(arr, mid+1, r);
        return arr[mid];
    };

    return reconstruct(in_order, 0, in_order.length-1);
};