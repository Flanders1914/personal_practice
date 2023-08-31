/*
153. Find Minimum in Rotated Sorted Array
是33. Search in Rotated Sorted Array 的简化版本
思路为分类讨论
*/
var findMin = function(nums) {
    let l = 0, r = nums.length-1;
    while (true) {
        let mid = (l+r) >> 1;
        //mid==r 或者 mid==l 时结束循环，简化下面的处理
        if (mid == l || mid == r) return Math.min(nums[l],nums[r]);
        if (nums[mid] < nums[l] && nums[mid] < nums[r]) {
            //是目标数或者在目标数的右侧
            r = mid;
        }
        if (nums[mid] > nums[l] && nums[mid] > nums[r]) {
            //在目标数的左侧
            l = mid+1;
        }
        if (nums[mid] >= nums[l] && nums[mid] <= nums[r]) {
            //在一个单调增加的区间内
            return nums[l];
        }
    }
};

console.log(findMin([0]))