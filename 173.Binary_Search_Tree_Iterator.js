/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
173. Binary Search Tree Iterator
思路：先构造一个in—order数组
注意：this的使用
*/
var BSTIterator = function(root) {
    this._inOrderArray = [];
    this._index = -1;
    this.inOrder = function(node) {
        if (node == null) return;
        this.inOrder(node.left);
        this._inOrderArray.push(node);
        this.inOrder(node.right);
    }
    this.inOrder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this._index++;
    return this._inOrderArray[this._index].val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if (this._index+1 <= this._inOrderArray.length-1) return true;
    else return false;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */