/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
501. Find Mode in Binary Search Tree
思路：中序遍历后相当于排好序的数组
 */
var findMode = function(root) {
    let count = 0;
    let max = 0;
    let res = [];
    let pre = undefined;

    const in_order = function(root) {
        if (!root) return;
        in_order(root.left);
        if ((pre === undefined) || (pre != root.val)) {
            if (count > max) {
                max = count;
                res = [pre];
            } else if (pre != undefined && count == max) {
                res.push(pre);
            }
        pre = root.val;
        count = 0;
        } else {
            count++;
        }
        in_order(root.right);
    };

    in_order(root);
    if (count > max) {
        max = count;
        res = [pre];
    } else if (count == max) {
        res.push(pre);
    }
    return res;
};