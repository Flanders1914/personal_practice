/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
257. Binary Tree Paths
思路：典型的DFS
注意path.pop() 和root == null的情况 即可
 */
var binaryTreePaths = function(root) {
    let ans = [];
    if (root == null) return [];
    let findPath = function(node, path) {
        path.push(node.val);
        if (node.left == null && node.right == null) {
            let str = '' + path[0];
            for (let i = 1; i <= path.length-1; i++) {
                str += '->' + path[i];
            }
            ans.push(str);
        }
        else {
            if (node.left != null) findPath(node.left, path);
            if (node.right != null) findPath(node.right, path);
        }
        path.pop();
        return;
    };
    findPath(root, []);
    return ans;
};