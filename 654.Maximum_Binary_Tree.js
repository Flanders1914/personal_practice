/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
654. Maximum Binary Tree
思路：递归生成
 */
function find_max(nums, l , r) {
    let max = nums[l], index = l;
    for (let i = l+1; i <= r; i++) {
        if (nums[i] > max) {
            index = i;
            max = nums[i];
        }
    }
    return [max, index];
}

var constructMaximumBinaryTree = function(nums, l = 0, r = nums.length-1) {

    if (l > r) return null;
    let [max, index] = find_max(nums, l, r);
    let node = new TreeNode(max);
    node.left = constructMaximumBinaryTree(nums, l, index-1);
    node.right = constructMaximumBinaryTree(nums, index+1, r);
    return node;

};