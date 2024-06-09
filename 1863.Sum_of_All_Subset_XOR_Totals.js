/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let sum = 0
    const search = function(pre, index, len) {
        if (len == 0) {
            sum += pre;
            return;
        }
        if (index == nums.length) {
            return;
        }
        for (let i = index; i < nums.length; i++) {
            if (pre == -1) search(nums[i], i+1, len-1);
            else search(pre^nums[i], i+1, len-1);
            
        }
    };

    for (let len = 1; len <= nums.length; len++) {
        search(-1, 0, len);
    }

    return sum;
};

let nums = [1, 3];
console.log(subsetXORSum(nums));