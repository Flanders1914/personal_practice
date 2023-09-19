/**
198. House Robber
简单的动态规划
dp公式显而易见
注意：可以优化不用数组，只需储存前两个值即可
 */
var rob = function(nums) {
   let dp = new Array(nums.length).fill(0);
   dp[0] = nums[0];
   dp[1] = Math.max(nums[0], nums[1]);
   for (let i = 2; i <= nums.length-1; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
   } 
   return dp[nums.length-1];
};
console.log(rob([2,7,9,3,1]));