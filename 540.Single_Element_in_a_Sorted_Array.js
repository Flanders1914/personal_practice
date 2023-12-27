/**
540. Single Element in a Sorted Array
用异或满足不了时间复杂度O(logn)
思路：二分查找
如果mid是两个连续的num之一，将 mid移动到两者中靠右的坐标
mid % 2 == 1 表示单独的数在右侧
mid % 2 == 0 表示单独的数在左侧
 */
var singleNonDuplicate = function(nums) {
    let l = 1;
    let r = nums.length-2;
    if (nums.length == 1) return nums[0];
    if (nums[0] != nums[1]) return nums[0];
    if (nums.at(-1) != nums.at(-2)) return nums.at(-1);
    while (l <= r) {
        if ((nums[l] != nums[l-1]) && (nums[l] != nums[l+1])) return nums[l];
        if ((nums[r] != nums[r-1]) && (nums[r] != nums[r+1])) return nums[r];
        let mid = (l+r) >> 1;
        if ((nums[mid] != nums[mid-1]) && (nums[mid] != nums[mid+1])) return nums[mid];
        else {
            if (nums[mid] == nums[mid+1]) mid++;
            if (mid % 2) l = mid;
            else r = mid;
        }
    }
};
console.log(singleNonDuplicate([1,1,2]));