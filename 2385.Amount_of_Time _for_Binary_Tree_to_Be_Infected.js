/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
2385. Amount of Time for Binary Tree to Be Infected
思路：利用hash表存储每个node的相应时间
两次遍历
第一次遍历：寻找到起点，将起点以及起点的根节点的相应时间先赋值
第二次遍历：从根节点开始对全树遍历，若当前节点已经存在赋值的时间（即是起点的根节点或者是起点）
否则该节点的时间为传递的父节点时间+1，向下传递该节点的时间
 */
var amountOfTime = function(root, start) {
   let res = 0;
   let visited = new Map();

   let find = function(root, target) {
        if (root === null) return Infinity;
        if (root.val == target) {
            visited.set(root, 0);
            return 0;
        }
        let left = find(root.left, target);
        let right = find(root.right, target);
        if (left !== Infinity) {
            visited.set(root, left+1);
            res = Math.max(res, left+1);
            return left+1;
        }
        if (right !== Infinity) {
            visited.set(root, right+1);
            res = Math.max(res, right+1);
            return right+1;
        }
        return Infinity;
   };

   find(root, start);

   let traverse = function(root, pre) {
        if (root == null) return;
        if (visited.has(root)) {
            pre = visited.get(root);
            traverse(root.left, pre);
            traverse(root.right, pre);
            return;
        }
        res = Math.max(res, pre+1);
        traverse(root.left, pre+1);
        traverse(root.right, pre+1);
        return;
   };

   traverse(root, 0);
   return res;
};

