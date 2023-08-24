/*
124. Binary Tree Maximum Path Sum
思路： DFS
利用一个上层变量max记录最大的值
DFS遍历每一个节点（本质上是个后序遍历）
若包含该点的path（四种可能）大于max，更新max
向上（该点的根节点）返回通过该点并能够达到其根节点的最大路径
*/
var maxPathSum = function(root) {
    //初始的max是最小的数
    let max = -Number.MAX_VALUE;

    function dfs(root) {
        if (!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        max = Math.max(max, root.val, root.val + left, root.val + right, root.val + left + right);
        return Math.max(root.val, root.val + left, root.val + right);
    }

    dfs(root);
    
    return max;
};