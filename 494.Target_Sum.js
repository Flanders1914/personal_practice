/**
494. Target Sum
思路1：搜索
思路2：利用map的dp
每一层的dp存储了上一次迭代能够产生的值的集合已经各自的数目
 */
/*
var findTargetSumWays = function(nums, target) {
    let res = 0;

    const dfs = function(i, pre) {
        if (i == nums.length) {
            if (pre == target) res++;
            return;
        }
        dfs(i+1, pre+nums[i]);
        dfs(i+1, pre-nums[i]);
    }

    dfs(0, 0);
    return res;
};
let nums = [1,1,1,1,1], target = 3;
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let dp = new Map();
    dp.set(0, 1);
    for (let num of nums) {
        let next = new Map();
        for (let item of dp.keys()) {
            let current = dp.get(item);
            if (next.has(item+num)) next.set(item+num, next.get(item+num)+current);
            else next.set(item+num, current);
            if (next.has(item-num)) next.set(item-num, next.get(item-num)+current);
            else next.set(item-num, current);
        }
        dp = next;
    }
    if (!dp.has(target)) return 0;
    return dp.get(target);
};
let nums = [1,1,1,1,1], target = 3;
console.log(findTargetSumWays(nums, target));