/*
110. Balanced Binary Tree
注意 平衡二叉树是指任意节点的左子树和右子树的高度差<=1
这里采用了递归的方法
若节点是平衡二叉子树：向上返回子树高度
若不是向上返回：false
为了避免0 与 false 混淆，令所有null节点为高度1的平衡二叉子树

另外：空字符串可以在类型转换中转换为false 但是 数组和对象（本质上是一个东西）不行
*/
var isBalanced = function(root) {
    if (root == null) return 1;
    let left_depth, right_depth;
    left_depth = isBalanced(root.left);
    right_depth = isBalanced(root.right);

    if (left_depth && right_depth) {
        if (Math.abs(left_depth - right_depth) > 1) return false;
        else return (Math.max(left_depth, right_depth) +1);
    } else return false;
};

