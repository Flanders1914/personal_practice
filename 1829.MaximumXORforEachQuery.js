/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let total = 0
    let target = 1
    for (let i = 1; i < maximumBit; i++) {
        target = target << 1
        target = target | 1
    }

    for (let num of nums) {
        total = total ^ num
    }

    let res = []
    for (let i = nums.length-1; i >= 0; i--) {
        res.push(target ^ total)
        total = total ^ nums[i]
    }
    return res
};

let nums = [0,1,2,2,5,7], maximumBit = 3
console.log(getMaximumXor(nums, maximumBit))