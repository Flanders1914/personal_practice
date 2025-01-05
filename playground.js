/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let sum = 0
    for (let num of nums) {
        sum += num
    }

    let res = 0
    let pre = 0
    for (let i = 0; i < nums.length-1; i++) {
        if (pre + nums[i] >= sum - (pre + nums[i])) {
            res++
        }
        pre += nums[i]
    }
    return res
};

let nums = [10,4,-8,7]
console.log(waysToSplitArray(nums))