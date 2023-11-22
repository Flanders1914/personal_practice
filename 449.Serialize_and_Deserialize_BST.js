/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
449. Serialize and Deserialize BST
思路：用前序serialize 类似 serialize binary tree 的思路
类似297. Serialize and Deserialize Binary Tree
由于BST的性质，我们可以不用"#"表示空节点，而是动态生成一个当前parent子树的取值区间
若数超过了这个取值区间，向上回溯，利用栈就能实现
注意这里的BST应该不存在相同值的点，否则遇到相同的值难以处理
*/
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res = [];
    if (!root) return '';
    let preOrder = function(root) {
        if (!root) return;
        res.push(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
    preOrder(root);
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === '') return null;
    data = data.split(',');
    let root = new TreeNode(Number(data[0]));
    let ranges = [[-Number.MAX_VALUE, Number.MAX_VALUE]];
    let stack = [root];
    for (let i = 1; i <= data.length-1; i++) {
        let num = Number(data[i]);
        let current = new TreeNode(num);
        while (stack.length) {
            let parent = stack.at(-1);
            let [floor, ceil] = ranges.at(-1);
            if (num >= floor && num <= ceil) {
                if (num < parent.val) {
                    parent.left = current;
                    ranges.push([floor, parent.val]);
                } else {
                    parent.right = current;
                    ranges.push([parent.val, ceil]);
                }
                stack.push(current);
                break;
            }
            stack.pop();
            ranges.pop();
        }
    }
    return root;
};
console.log(deserialize('3,2,1,5,4,6'));

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */