/**
442. Find All Duplicates in an Array
思路： cyclic sort
要求 O(n) 空间O(1) 数据均在1...n区间内，典型的cyclic sort 题目
注意，发现重复值用0取消重复值，避免重复值多次算入res中
然后注意循环避开0即可
 */
var findDuplicates = function(nums) {
    let res = [];
    let index = 0;
    let n = nums.length;
    while (index <= n-1) {
        if (nums[index] == 0) {
            index++;
            continue;
        }
        while (nums[index] != index+1) {
            if (nums[nums[index]-1] == nums[index]) {
                res.push(nums[index]);
                nums[index] = 0;
                break;
            }
            let temp = nums[nums[index]-1]; // 注意这里不能使用解构赋值，因为会对索引产生影响
            nums[nums[index]-1] = nums[index];
            nums[index] = temp;
            if (nums[index] == 0) break;
        }
        index++;
    }
    return res;
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]));