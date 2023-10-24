/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
235. Lowest Common Ancestor of a Binary Search Tree
思路对BST做两次查询工作
第一次寻找p,并将从root一直到p的路径做上标记
第二次寻找q,在查找过程中，如果路径是被标记的说明该路径是common ancestor
如果路径没有被标记说明不是，所以在往下走时判断要走向的子节点是否被标记，若是
当前根节点为LCA。如果找到了q且路径一直被标记说明恰好完全在路径上，LCA为q
这道题需要注意p和q都是节点而非数值
 */
var lowestCommonAncestor = function(root, p, q) {
    let find1 = function(root, target) {
        root.sign = true;
        if (root.val == target) return;
        else if (root.val > target) {
            find1(root.left, target);
        } else {
            find1(root.right, target);
        }
    }
    find1(root, p.val);

    let find2 = function(root, target) {
        if (root.val == target) return root;
        else if (root.val > target) {
            if ("sign" in root.left) return find2(root.left, target);
            else return root;
        } else {
            if ("sign" in root.right) return find2(root.right, target);
            else return root;
        }
    }
    return find2(root, q.val);
};
let tree = {val : 6, left : {val : 2, right : {val : 4}}};
console.log(lowestCommonAncestor(tree, {val : 2},{val : 4}));