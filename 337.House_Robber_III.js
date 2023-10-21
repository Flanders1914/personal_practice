/**
337. House Robber III
思路：利用包装器包装了一个search函数
search函数是利用递归求解原题，具体思路为返回max(根+根的左右子树的左右子树，根的左右子树)
利用cache存储以root为根的树的最大值
robbing函数是用来从cache中提取以root为根的树的最大值，避免重复计算
这种思路写起来容易不过空间复杂度稍微有点高
也可以从叶节点向根节点用dp做
 */
var rob = function(root) {
    let cache = new Map();

    function robbing(root) {
        if (cache.has(root)) return cache.get(root);
        else cache.set(root, search(root));
        return cache.get(root);
    }

    let search = function(root) {
        if (root == null) return 0;
        let left = 0, left_left = 0, left_right = 0;
        if (root.left !== null) {
            left = robbing(root.left);
            left_left = (root.left.left == null)? 0 : robbing(root.left.left);
            left_right = (root.left.right == null)? 0 : robbing(root.left.right);
        } else {
            left = 0;
            left_left = 0;
            left_right = 0;
        }

        let right = 0, right_left = 0, right_right = 0;
        if (root.right !== null) {
            right = robbing(root.right);
            right_left = (root.right.left == null)? 0 : robbing(root.right.left);
            right_right = (root.right.right == null)? 0 : robbing(root.right.right);
        } else {
            right = 0;
            right_left = 0;
            right_right = 0;
        }
        return (Math.max(left + right, root.val +left_left + left_right + right_left + right_right));
    };

    return search(root);
};