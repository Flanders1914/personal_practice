/**
331. Verify Preorder Serialization of a Binary Tree
思路：利用stack从左子树开始删除树
按顺序将节点入栈(根节点始终在叶节点下)，若出现连续两个#，表明该两个#下面的那个节点可以被剪除，去掉
两个##和下面的节点后再push一个#(表明节点的根节点的左右其中一枝已经被删除)
最后栈中应该只剩下#
如果无法按规则删除节点或者残留其他值，说明invalid
 */
var isValidSerialization = function(preorder) {
    let stack = [];
    preorder = preorder.split(',');
    for (let c of preorder) {
        if (stack.length == 0) stack.push(c);
        else {
            if (stack.at(-1) == '#' && c == '#') {
                while (stack.length > 0 && stack.at(-1) == "#") {
                    stack.pop();
                    if (stack.length == 0 || stack.at(-1) == '#') return false;
                    stack.pop();
                }
                stack.push('#');
            } else {
                stack.push(c);
            }
        }
    }
    if (stack == '#') return true;
    else return false;
};
console.log(isValidSerialization("9,#,92,#,#"));