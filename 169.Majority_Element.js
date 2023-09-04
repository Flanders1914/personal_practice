/*
169. Majority Element
思路：Moore Voting Algorithm
时间复杂度O(n) 空间复杂度O(1)
思路：只有majority element，其个数-其他元素的个数>0
所以我们在迭代中动态统计 count=candidate的数量-其他元素的数量
当count == 0 时改变 candidate 最后的candidate一定是majority element
*/
var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 1;

    for (let i = 1; i <= nums.length-1; i++) {
        if (count == 0) {
            candidate = nums[i];
            count++;
            continue;
        }
        if (nums[i] == candidate) count++;
        else count--;
    }

    return candidate;
};