/*
152. Maximum Product Subarray
思路：令max[i]为以i为结束的字符串的最大乘积
令min[i]为以i为结束的字符串的最小乘积
生成这两个数组，结果是max数组中的最大值
注意：
由于每次只用到了i之前的min[i-1] max[i-1] 所以可以不用数组
*/
var maxProduct = function(nums) {
    let max = new Array(nums.length), min = new Array(nums.length);
    min[0] = nums[0];
    max[0] = nums[0];
    let ans = max[0];

    for (let i = 1; i <= nums.length-1; i++) {
        if (nums[i] > 0) {
            if (max[i-1] > 0) max[i] = max[i-1]*nums[i];
            else max[i] = nums[i];
            if (min[i-1] > 0) min[i] = nums[i];
            else min[i] = min[i-1]*nums[i];
        }
        else {
            if (min[i-1] <= 0) max[i] = min[i-1]*nums[i];
            else max[i] = nums[i];
            if (max[i-1] > 0) min[i] = max[i-1]*nums[i];
            else min[i] = nums[i];
        }
        ans = (ans < max[i])? max[i] : ans;
    }

    return ans;
};

console.log(maxProduct([2,3,-2,4]));