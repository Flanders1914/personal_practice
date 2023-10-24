/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
236. Lowest Common Ancestor of a Binary Tree
思路和235类似同样是做两次树的search
由于是普通的二叉树所以需要用DFS分别生成到p,q的path
然后取出path中相同的部分即可
 */
var lowestCommonAncestor = function(root, p, q) {
    let search = function(root, target, path) {
        if (root == target) {
            return path;
        }
        if (root.left) {
            path.push(root.left);
            let next = search(root.left, target, path);
            if (next) return next;
            path.pop();
        }
        if (root.right) {
            path.push(root.right);
            let next = search(root.right, target, path);
            if (next) return next;
            path.pop();
        }
    };
    let path_p = search(root, p, [root]);
    let path_q = search(root, q, [root]);
    for (let i = 0; i <= Math.min(path_p.length, path_q.length)-1; i++) {
        if (path_p[i] != path_q[i]) return path_p[i-1];
    }
    return path_p[Math.min(path_p.length, path_q.length)-1];
};