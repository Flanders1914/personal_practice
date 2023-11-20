/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
437. Path Sum III
思路：递归
每一层递归调用dfs生成左右树能够产生的和的集合
然后判断其加上当前的val是否能够满足targetSum
再向上返回加上当前val的集合
注意每一层要返回该层的val本身
 */
var pathSum = function(root, targetSum) {
    let res = 0;
    let dfs = function(root, targetSum) {
        if (!root) return [];
        if (root.val == targetSum) res++;
        let left = dfs(root.left, targetSum);
        let right = dfs(root.right, targetSum);
        let current = [root.val];
        for (let num of left) {
            if (num + root.val == targetSum) res++;
            current.push(num + root.val);
        }
        for (let num of right) {
            if (num + root.val == targetSum) res++;
            current.push(num + root.val);
        }
        return current;
    };
    dfs(root, targetSum);
    return res;
};