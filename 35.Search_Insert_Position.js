/*
35. Search Insert Position
思路：简单的二分查找改版
注意：
由于floor()的向下取整的性质，向左和向右处理稍微不同
向左 r = mid，区间会自然缩减至单个元素
向右 l = mid，区间只会缩减到最少两个元素
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length -1;
    let mid;

    while (true) {
        if (l == r) {
            if (nums[l] == target) return l;
            else return (nums[l] > target)? l : l + 1;
        }

    mid = Math.floor((l + r)/2);
    if (nums[mid] > target) r = mid;
    else if (nums[mid] < target) l = mid + 1;
    else return mid;
    }
};

console.log(searchInsert([1,3,5,6], 11));