/**
384. Shuffle an Array
思路：每一次迭代，在[0,len-1]区间内随机选择一个数将其与最后一个数进行交换
然后 len--, 一直迭代到len = 1，完成洗牌
初始条件 len = this.nums.length 即随机取值的区间长度与原数组相同
 */
var Solution = function(nums) {
    this.backup = nums.slice();
    this.nums = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    for (let i = 0; i <= this.nums.length-1; i++) {
        this.nums[i] = this.backup[i];
    }
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let len = this.nums.length;
    while (len > 1) {
        let index = Math.floor(Math.random()*len);
        [this.nums[index], this.nums[len-1]] =
        [this.nums[len-1], this.nums[index]];
        len--;
    }
    return this.nums;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */