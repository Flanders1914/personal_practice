/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a, b) => a - b);
    let index = 0;

    for (let x = 0; x <= nums[nums.length-1]; x++) {
        while (nums[index] < x) index++;
        if (x == nums.length - index) return x;
    }
    return -1;
};