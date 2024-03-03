/**
410. Split Array Largest Sum
方法1：二维dp
dp[i][k] 表示 前i个元素分k组的最小最大元素组和
dp[i][k] = min（max(dp[i-t][k-1], nums[i-t+1] +...+ nums[i])

方法2：
二分法
大致思路是在区间内针对不同的最小最大和计算出相应的分割次数，然后和k进行比对进行二分查找
时间复杂度为O(nlog(sum of nums))
当 sum of nums 较小时可以用
 */
/*
var splitArray = function(nums, k) {
   let dp = new Array(nums.length).fill().map(() => new Array(k+1).fill(Number.MAX_VALUE));
   dp[0][1] = nums[0];
   for (let i = 1; i <= nums.length-1; i++) {
      dp[i][1] = dp[i-1][1] + nums[i];
   }

   for (let j = 2; j <= k; j++) {
      dp[j-1][j] = nums[0];
      for (let i = 1; i <= j-1; i++) {
         dp[j-1][j] = Math.max(dp[j-1][j], nums[i]);
      }
      for (let i = j; i <= nums.length-1; i++) {
         sum = 0;
         for (let t = i; t >= j-1; t--) {
            sum += nums[t];
            dp[i][j] = Math.min(dp[i][j], Math.max(sum, dp[t-1][j-1]));
         }
      }
   }

   return dp[nums.length-1][k];
};
*/

var splitArray = function(nums, k) {
   let left = Math.max(...nums);
   let right = nums.reduce((accu, cur) => accu+cur, 0);

   while (left <= right) {
      let mid = (left + right) >> 1;
      let num = count(nums, mid);
      if (num > k) {
         left = mid +1;
      } else if (num <= k) {
         right = mid-1;
      }
   }

   function count(nums, target) {
      let res = 0;
      let cur = 0;
      for (let num of nums) {
         cur += num;
         if (cur > target) {
            cur = num;
            res++;
         }
      }
      return res+1;
   };

   return left;
};

console.log(splitArray([7,2,5,10,8], 2));