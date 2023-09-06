/*
238. Product of Array Except Self
intuition：由于这道题要求时间复杂度O(n)并且不能用除法
所以可以利用两个数组存储从左到右和从右到左的乘积，最后的答案为
ans[i] = leftToRight[i-1] * rightToLeft[i+1]
其实不一定需要存储这两个数组，我们可以在从left 到 right时直接将乘积写在
ans里面，然后在从right 到 left 时利用一个变量储存之前的乘积即可，将
空间复杂度控制在O(1)
*/
var productExceptSelf = function(nums) {
    let ans = new Array(nums.length).fill(0);
    // from left to right
    ans[0] = 1;
    for (let i = 1; i <= nums.length-1; i++) {
        ans[i] = ans[i-1] * nums[i-1];
    }
    // from right to left
    let right = nums[nums.length-1];
    for (let i = nums.length-2; i >= 0; i--) {
        ans[i] *= right;
        right *= nums[i];
    }
    return ans;
};

console.log(productExceptSelf([1,2,3,4]))