/**
307. Range Sum Query - Mutable
思路：利用数组储存前n项数的和，查询的时间复杂度O(1) 修改的时间复杂度O(n)
可以用线段树segment tree 或者 Binary Indexed Tree(Fenwick tree)进行优化
segment tree 是将区间化为平衡二叉树 叶节点为单位区间
使用segment tree 查询和修改的时间复杂度均为O(logn)
 */
var NumArray = function(nums) {
    this.nums = nums.slice();
    this.memo = new Array(nums.length).fill(0);
    this.memo[0] = nums[0];
    for (let i = 1; i <= nums.length -1; i++) {
        this.memo[i] = this.memo[i-1] + nums[i];
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    let difference = val - this.nums[index];
    this.nums[index] = val;
    for (let i = index; i <= this.memo.length -1; i++) {
        this.memo[i] += difference;
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left == 0) return this.memo[right];
    return this.memo[right] - this.memo[left -1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */