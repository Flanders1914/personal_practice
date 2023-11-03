/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
297. Serialize and Deserialize Binary Tree
思路：serialize 按前序遍历serialize，空节点用#表示
deserialize 从根节点开始利用栈存储之前的节点，遇到#时从延长左树换成延长右树
从延长右树利用stack回溯到最近的存在空右节点的根节点
当延长一个新节点时之后延长树从左节点开始
*/
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res = '';
    if (root == null) return '#';
    let traversal = function(root) {
        res += root.val + ',';
        if (root.left) traversal(root.left);
        else res += '#' + ',';
        if (root.right) traversal(root.right);
        else res += '#'+ ',';
    }
    traversal(root);
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data == '#') return null;
    data = data.split(',');
    let root = new TreeNode(Number(data[0]));
    let stack = [root], pre = root;
    let isLeft = true;
    for (let i = 1; i <= data.length-2; i++) { //原data最后一个字符是','所以转换后最后一个单元格是undefined
        if (data[i] != '#') {
            let node = new TreeNode(Number(data[i]));
            if (isLeft) pre.left = node;
            else {
                pre.right = node;
                isLeft = true; // 新节点之后的节点从左树开始
            }
            stack.push(node);
            pre = node;
        } else {
            if (isLeft) isLeft = false; //左节点为null
            else {
                stack.pop(); // 右节点为null 该根节点出栈
                while (stack.length && stack.at(-1).right) stack.pop(); // 回溯至最近个右节点为空的root
                pre = stack.at(-1);
            }
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
console.log(serialize(deserialize('1,2,#,#,3,4,#,#,5,#,#,#,')));