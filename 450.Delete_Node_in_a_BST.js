/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
450. Delete Node in a BST
思路：树旋转
当target的左右树存在空树时比较好处理，当左右树均不为空时，将左数左旋至根的右节点为空，将删除target
左树连至target的祖先，右树连至左树的右侧
树左旋
    A                   C
  /   \   左旋——>      /  b
 B     c              A
      a  b           /  a
                    B
 */
var deleteNode = function(root, key) {
    let search = function(parent, root, key) {
        if (!root) return [null, null];
        if (root.val == key) return [parent, root];
        if (root.val < key) return search(root, root.right, key);
        else return search(root, root.left, key);
    };

    let start = {left : root}; 
    let [parent, target] = search(start, root, key);
    if (!target) return root;
    let is_left = false;
    if (parent.left == target) { // is_left 记录删除的节点和parent的关系
        is_left = true;
    }

    if (!target.left || !target.right) { // 左右树存在一个空树，直接连上非空树即可
        let next = (target.left)? target.left : target.right;
        if (is_left) parent.left = next;
        else parent.right = next;
        return start.left;
    }
    let left_root = target.left;
    let right_root = target.right;
    while (left_root.right) { // 左树左旋至根节点不存在右节点
        let right = left_root.right;
        let detached = right.left;
        left_root.right = detached;
        right.left = left_root;
        left_root = right;
    }
    left_root.right = right_root;
    if (is_left) parent.left = left_root;
    else parent.right = left_root;
    return start.left;
};