/**
491. Non-decreasing Subsequences
思路：递归生成
每次递归在可用坐标范围内找满足条件的下一个num
注意在循环开始时使用一个used集合 存储之前的循环使用过的nums[i]数值
避免在同一层递归中取相同的值以避免重复
 */
var findSubsequences = function(nums) {
    let res = [];
    let search = function(index, pre) {
        if (index == nums.length) {
            return;
        }
        let used = new Set();
        for (let i = index; i <= nums.length-1; i++) {
            if (used.has(nums[i])) continue;
            if (!pre.length || nums[i] >= pre.at(-1)) {
                pre.push(nums[i]);
                if (pre.length > 1) res.push(pre.slice());
                search(i+1, pre);
                pre.pop();
            }
            used.add(nums[i]);
        }
    }
    search(0, []);
    return res;
};
for (let item of findSubsequences([1,2,3,4])) console.log(item);