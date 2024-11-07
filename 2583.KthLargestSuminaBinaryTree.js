/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    let level_sum = []
    let current = [root]
    while (current.length != 0) {
        let next = []
        let sum = 0
        for (let node of current) {
            sum += node.val
            if (node.left != null) {
                next.push(node.left)
            }
            if (node.right != null) {
                next.push(node.right)
            }
        }
        level_sum.push(sum)
        current = next
    }

    level_sum.sort((a, b) => b-a)
    if (k-1 < level_sum.length) return level_sum[k-1]
    else return -1
};