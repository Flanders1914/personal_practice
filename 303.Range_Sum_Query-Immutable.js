/**
303. Range Sum Query - Immutable
思路：利用this._sums数组储存到i的元素和
区间的和可以从该数组对应的项相减得到
 */
var NumArray = function(nums) {
    this._sums = [nums[0]];
    for (let i = 1; i <= nums.length-1; i++) {
        this._sums.push(this._sums[i-1] + nums[i]);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left != 0) return this._sums[right] - this._sums[left-1];
    else return this._sums[right];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */