/**
918. Maximum Sum Circular Subarray
思路1：dp
dp1 包括当前nums[i]的连续序列和的最大值 max1 在1...i内所有连续序列和的最大值
dp2 通过nums[i]的circular subarray的和的最大值
dp3 从1..i的nums和，max3在1...i内从1开始的连续序列最大和
dp2 = max{dp2 + nums[i], nums[i]+max3，nums[i]} 即要么在原来的circular subarray中添加nums[i] 要么nums[i]和1...k的序列
联合形成新的circularsubarray，要么只有nums[i]自身

——————————————————————————————————————————————————————————————————
备注：Kadane’s Algorithm 即(解决Largest Sum Contiguous Subarray的dp算法）
    用一个数组max_ending_here[i] 存储以i结尾的 subarray的最大值
    max_ending_here[i] = max{max_ending_here[i-1]+nums[i], nums[i]}
    也可以只用一个变量 dp = Math.max(dp+nums[i], n nums[i]);
    结果res取dp在迭代中出现的最大值
    这里的dp1就是利用kadane's algorithm解决题目
 */
var maxSubarraySumCircular = function(nums) {
    dp1 = nums[0];
    dp2 = nums[0];
    dp3 = nums[0];
    let max1 = dp1, max3 = dp3;
    for (let i = 1; i <= nums.length-1; i++) {
        dp1 = Math.max(dp1+nums[i], nums[i]);
        max1 = Math.max(max1, dp1);
        dp2 = Math.max(dp2+nums[i], nums[i]+ max3, nums[i]);
        dp3 += nums[i];
        max3 = Math.max(dp3, max3);
    }
    return Math.max(dp2, max1);
};
console.log(maxSubarraySumCircular([1,-2,3,2]));