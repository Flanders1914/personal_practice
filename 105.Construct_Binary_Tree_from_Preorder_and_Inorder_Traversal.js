/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
105. Construct Binary Tree from Preorder and Inorder Traversal
前序和中序遍历求二叉树
思路：递归生成树，前序遍历的首项是根节点
在中序遍历中找到前序首项对应的值的坐标，并将中序
遍历分割为左子树的中序遍历和右子树的中序遍历，前序遍历删除首项
新的首项是左子树的根节点
注意：
1. 删除首项用shift(), slice返回的是复制的数组
2. inorder == [] 时返回（因为这里没有处理preorder == []）
 */
var buildTree = function(preorder, inorder) {
    if (inorder.length == 0) {
        return null;
    } 
    if (preorder.length == 1) {
        let node = new TreeNode(preorder[0], null, null);
        preorder.shift();
        return node;
    }

    let node = new TreeNode(preorder[0], null, null);
    let index;
    for (let i = 0; i <= inorder.length-1; i++) {
        if (inorder[i] == preorder[0]) {
            index = i;
            break;
        }
    }
    preorder.shift();
    node.left = buildTree(preorder, inorder.slice(0, index));
    node.right = buildTree(preorder, inorder.slice(index+1));
    return node;
};