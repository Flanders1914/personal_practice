/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
106. Construct Binary Tree from Inorder and Postorder Traversal
后序遍历和中序遍历求二叉树
思路：与前序+中序相同，后序末尾是根节点，然后根据
根节点划分左右子树
这里的实现使用了传递中序遍历坐标的方式来提高速度
 */
var buildTree = function(inorder, postorder) {
    let P_i = postorder.length -1;

    const make = function(in_i, in_j) {
        if (P_i < 0) return null;
        if (in_i > in_j) return null;

        let node = new TreeNode(postorder[P_i]);
        let index;
        for (let i = in_i; i <= in_j; i++) {
            if (postorder[P_i] == inorder[i]) {
                index = i;
                break;
            }
        }
        P_i--;
        node.right = make(index +1, in_j);
        node.left = make(in_i, index -1);
        return node;
    };

    return make(0, inorder.length -1);
};