/*
114. Flatten Binary Tree to Linked List
将二叉树转换为先序遍历的链表，用right连接
思路:
由于该题目要求主函数不能返回任何值，所以我们在主函数里包装了一个函数
这个函数作用是将树转换为链表同时返回末尾的链表项（用作接下来的连接）
1. 将二叉树拆开，保存右子树至right_tree，左子树连接到右子树
2. 递归调用函数，参数传递右子树，获得链表生成后的conjunction
3. 将right_tree连接到conjunction.right
4. 递归调用函数，参数传递right_tree 更新conjunction
5. 返回conjunction

注意：返回的总是叶节点，注意null的处理（right_tree可能是null)
*/
var flatten = function(root) {
    if (root == null) {
        return null;
    }

    const flattening = function(root) {
        if (root.left == null && root.right == null) return root;
        let right_tree = root.right;
        root.right = root.left;
        root.left = null;

        let conjunction;
        if (root.right !== null) {
            conjunction = flattening(root.right);
        } else conjunction = root;

        if (right_tree == null) return conjunction;
        conjunction.right = right_tree;
        conjunction = flattening(right_tree);
        return conjunction;
    };

    flattening(root);

};