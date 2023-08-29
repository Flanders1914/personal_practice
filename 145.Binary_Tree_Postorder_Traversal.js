/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
145. Binary Tree Postorder Traversal
利用stack写的后序遍历
需要一个set判断节点是否已经访问过，也可以在每个节点添加一个visited属性（但最好不要改原来的树）
注意后序遍历：left-right-root
所以需要先让right进栈，这样right才能后于left访问
*/
var postorderTraversal = function(root) {
    const stack = [root];
    const set = new WeakSet();
    const ans = [];

    while (stack.length) {
        let current = stack.pop();
        if (!set.has(current)) {
            set.add(current);
            stack.push(current);
            if (current.right) stack.push(current.right); //注意由于是先left后right
            if (current.left) stack.push(current.left);
        }
        else {
            ans.push(current.val);
        }
    }

    return ans;
};

let tree = {val :  1, left : null, right : null};
console.log(postorderTraversal(tree));