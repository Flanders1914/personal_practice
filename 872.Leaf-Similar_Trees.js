/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
872. Leaf-Similar Trees
思路：in_order traversal 能够以题目要求的顺序储存叶节点
 */
var leafSimilar = function(root1, root2) {
    const in_order = function(root, seq) {
        if (root === null) return;
        if ((root.left == null) && (root.right == null)) {
            seq.push(root.val);
            return;
        }
        in_order(root.left, seq);
        in_order(root.right, seq);
    }
    let seq1 = [];
    in_order(root1, seq1);
    let seq2 = [];
    in_order(root2, seq2);
    if (seq1.length != seq2.length) return false;
    for (let i = 0; i <= seq1.length-1; i++) {
        if (seq1[i] != seq2[i]) return false;
    }
    return true;
};