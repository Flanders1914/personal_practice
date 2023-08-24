/*
129. Sum Root to Leaf Numbers
思路：先序遍历，向下传递值，达到叶节点将值加到ans上
*/
var sumNumbers = function(root) {
    let ans = 0;
    
    function searchPath(root, previous) {
        if (!root) return;
        if (!root.left && !root.right) {
            ans += previous*10 + root.val;
        }
        let current = root.val + previous*10;
        searchPath(root.left, current);
        searchPath(root.right, current);
    }

    searchPath(root, 0);
    return ans;
};