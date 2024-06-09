/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    let res = 0;
    const dfs = function(root) {
        if (root == null) return 0;
        let leftNum = dfs(root.left);
        let rightNum = dfs(root.right);
        let total = 1-root.val;

        res += Math.abs(leftNum) + Math.abs(rightNum);
        total += leftNum + rightNum;

        return total;
    };

    dfs(root);
    return res;
};

console.log(distributeCoins({val:3, left:{val:0, left:null, right:null}, right:{val:0, left:null, right:null}}))
