/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
508. Most Frequent Subtree Sum
本质是后序遍历
 */
var findFrequentTreeSum = function(root) {
    let hash = new Map();
    let search = function(root) {
        if (root === null) return 0;
        let left = search(root.left);
        let right = search(root.right);
        let total = left + right + root.val;
        if ( hash.has(total)) hash.set(total, hash.get(total)+1);
        else hash.set(total, 1);
        return total;
    };
    search(root);
    let count = 0;
    for (let value of hash.values()) {
        if (value > count) count = value;
    }
    let res = [];
    for (let items of hash.entries()) {
        if (items[1] == count) res.push(items[0]);
    }
    return res;
};