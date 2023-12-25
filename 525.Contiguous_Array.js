/**
525. Contiguous Array
思路：
利用了 523. Continuous Subarray Sum 类似的思路
即 prefix sum + 分析 prefix sum 特征 + hash表
当我们遇到0 sum-1，遇到1 sum+1
满足条件的区间其区间和为0
即 若 Sj - Si == 0 表示 区间 [i+1,j] 满足1的数量与0相等
该区间长度 j-i
我们利用一个hash表 存储之前的sum值和对应的最早出现的坐标，若当前的sum已经在hash表中，表示
存在一个满足条件的区间
当前i-对应的hash值为我们所求的最大长度的候选
 */
var findMaxLength = function(nums) {
    let sum = (nums[0] == 0)? -1 : 1;
    let hash = new Map();
    let res = 0;
    hash.set(sum, 0);
    hash.set(0, -1);
    for (let i = 1; i <= nums.length-1; i++) {
        sum += (nums[i] == 0)? -1 : 1;
        if (hash.has(sum)) res = Math.max(res, i-hash.get(sum));
        else hash.set(sum, i);
    }
    return res;
};