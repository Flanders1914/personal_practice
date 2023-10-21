/**
213. House Robber II
与house robber I 不同之处在于这里的房子（nums)是一个circle
思路：
先转化为一维的房子，用house robber I的dp公式
用两个dp数组，一个是rob了第一间房子所以最后一间不能rob
一个是没有rob第一间房子所以最后一间可以rob，最后比较两者的结果取较大者就行了
 */
var rob = function(nums) {
    if (nums.length == 1) return nums[0];
    let dp1 = new Array(nums.length+1).fill(0);
    let dp2 = new Array(nums.length+1).fill(0);
    dp1[1] = nums[0], dp2[1] = 0;
    for (let i = 2; i <= nums.length-1; i++) {
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + nums[i-1]);
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + nums[i-1]);
    }
    dp1[nums.length] = dp1[nums.length-1];
    dp2[nums.length] = Math.max(dp2[nums.length-1], dp2[nums.length-2]+nums[nums.length-1]);

    return Math.max(dp1[nums.length], dp2[nums.length]);
};
console.log(rob([1,2]));