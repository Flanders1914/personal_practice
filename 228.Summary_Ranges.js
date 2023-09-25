/**
228. Summary Ranges
将有序数组的元素进行总结，连续的元素用区间表示
 */
var summaryRanges = function(nums) {
    if (nums.length == 0) return [];
    if (nums.length == 1) return [`${nums[0]}`]
    let ans = [];
    let begin = nums[0];
    let end = nums[0];
    for (let i = 1; i <= nums.length-1; i++) {
        if (nums[i] != end+1) {
            if (begin == end) ans.push(`${begin}`);
            else ans.push(`${begin}->${end}`);
            begin = nums[i];
            end = begin;
        }
        else {
            end++;
        }
    }

    if (begin == end) ans.push(`${begin}`);
    else ans.push(`${begin}->${end}`);
    return ans;
};

console.log(summaryRanges([0,2,3,4,6,8,9]));