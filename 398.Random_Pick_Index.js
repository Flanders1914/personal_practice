/**
398. Random Pick Index
思路：hash表映射到坐标数组
 */
var Solution = function(nums) {
    this.memo = new Map();
    for (let i = 0; i <= nums.length-1; i++) {
        if (this.memo.has(nums[i])) {
            let arr = this.memo.get(nums[i]);
            arr.push(i);
        } else {
            let arr = [i];
            this.memo.set(nums[i], arr);
        }
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let arr = this.memo.get(target);
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */