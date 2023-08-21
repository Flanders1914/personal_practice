/*
111. Minimum Depth of Binary Tree
二叉树的最小深度，宽搜即可
 */
var minDepth = function(root) {
    if (root == null) return 0;
    let depth = 1;
    let cache = [root];

    while (cache.length) {
        let next = [];
        for (let node of cache) {
            if (!node.left && !node.right) return depth;
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        depth++;
        cache = next;
    }
};