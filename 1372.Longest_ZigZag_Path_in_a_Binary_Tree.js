/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
1372. Longest ZigZag Path in a Binary Tree
思路：DFS（后序遍历）
在每个节点都当其为节点，计算向左走的长度和向右走的长度
然后根据这个节点是左还是右节点向上返回对应的长度
注意最后的答案是zigzag长度-1
 */
var longestZigZag = function(root) {
    let res = 0;
    const search = function(root, is_left) {
        if (!root) return 0;
        let current1 = search(root.left, true) +1; // 向左走
        let current2 = search(root.right, false) +1; // 向右走
        res = Math.max(current1, current2, res);
        if (is_left) return current2;
        else return current1;
    };    
    search(root, true);
    return res-1;
};
console.log(longestZigZag({left : {left:null, right: null}, right : null}));