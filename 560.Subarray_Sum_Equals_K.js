/**
560. Subarray Sum Equals K
思路：
经典 prefix sum + hash表
计算到i时的prefix sum 
在hash表中寻找 当前 prefix sum - k 的个数，即为以当前num为结尾的满足条件发subarray个数
将每个prefix sum 保存到hash表中，包括0

 */
var subarraySum = function(nums, k) {
    let res = 0;
    let sum = 0;
    let hash = new Map();
    hash.set(0 ,1);
    for (let num of nums) {
        sum += num;
        if (hash.has(sum-k)) res += hash.get(sum-k);
        if (hash.has(sum)) hash.set(sum, hash.get(sum) +1);
        else hash.set(sum, 1);
    }
    return res;
};
console.log(subarraySum([1,1,1],2));