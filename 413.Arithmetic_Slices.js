/**
413. Arithmetic Slices
注意subarray不是 subsequence subarray是连续的
 */
var numberOfArithmeticSlices = function(nums) {
    let res = 0;
    for (let i = 0; i <= nums.length -3; i++) {
        let difference = nums[i+1] - nums[i];
        for (let j = i+2; j <= nums.length-1; j++) {
            if (nums[j]-nums[j-1] == difference) res++;
            else break;
        }
    }
    return res;
};
console.log(numberOfArithmeticSlices([1,2,3,4,5,6]));