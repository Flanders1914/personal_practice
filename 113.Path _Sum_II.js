/*
113. Path Sum II
寻找有无和为targetSum的根-叶路径
思路：DFS 
注意：ans 需要push current的拷贝
current在返回上一级前要pop()
*/
var pathSum = function(root, targetSum) {
    const ans = [];
    let current = [];

    const find_ans = function(root, targetSum) {
        if (root === null) return;
        if (root.val == targetSum && root.left == null && root.right == null) {
            current.push(root.val);
            ans.push(current.slice());
            current.pop();
            return;
        }

        let next = targetSum - root.val;
        current.push(root.val);
        find_ans(root.left, next);
        find_ans(root.right, next);
        current.pop();
    };

    find_ans(root, targetSum);
    return ans;
};