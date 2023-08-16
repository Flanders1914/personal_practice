/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
99. Recover Binary Search Tree
BST树的恢复
思路：获取BST的中序遍历，按照BST性质，BST中序为一个单调增加的序列
所以在中序遍历中从前向后找，再从后往前找就能找到被交换的节点
空间复杂度O(n)，Morris中序遍历算法可以优化至O(1)
*/
var recoverTree = function(root) {
    const inOrder_traversal = function(root, arr) {
        if (root == null) return;
        inOrder_traversal(root.left, arr);
        arr.push([root.val ,root]);
        inOrder_traversal(root.right, arr);
        return;
    }

    const arr = [];
    inOrder_traversal(root, arr);
    let a,b;
    //从前往后找被交换的节点a
    for (let i = 0; i <= arr.length -2; i++) {
        if (arr[i][0] > arr[i+1][0]) {
            a = arr[i][1];
            break;
        }
    }
    //从后往前找被交换的节点b
    for (let i = arr.length -1; i >= 1; i--) {
        if (arr[i][0] < arr[i-1][0]) {
            b = arr[i][1];
            break
        } 
    }

    let temp = a.val;
    a.val = b.val;
    b.val = temp;
    return;
};