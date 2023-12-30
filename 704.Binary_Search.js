/**
704. Binary Search
思路：二分查找
 */
var search = function(nums, target) {
    let l = 0, r = nums.length-1;
    while (l <= r) {
        let mid = (l+r) >> 1;
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) r = mid-1;
        else l = mid+1;
    }
    return -1;
};
