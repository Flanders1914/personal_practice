/*
112. Path Sum
寻找有无和为targetSum的根-叶路径
思路：DFS
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) return false;
    if (root.val === targetSum && root.left === null && root.right === null) {
        return true;
    }
    
    let next = targetSum - root.val;
    if (hasPathSum(root.left, next)) return true;
    if (hasPathSum(root.right, next)) return true;

    return false;
};