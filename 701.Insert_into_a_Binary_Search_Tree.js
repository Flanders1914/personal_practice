/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
思路：找到所处的位置，当前位置是null，假设存在一个val
然后用新节点代替null
 */
function find(pre, current, target) {
    if (!current) return pre;
    if (current.val < target) return find(current, current.right, target);
    if (current.val > target) return find(current, current.left, target);

}
var insertIntoBST = function(root, val) {
    let node = new TreeNode(val);
    if (!root) return (node);
    let parent = find(null, root, val);
    if (parent.val < val) parent.right = node;
    else parent.left = node;
    return root;
};