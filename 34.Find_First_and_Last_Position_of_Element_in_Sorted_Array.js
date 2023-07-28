/*
34. Find First and Last Position of Element in Sorted Array
思路：二分查找变形，先找到任意一个target的位置，再从这里出发向左找最左端的点
向右找最右端的点
思路不难，但很多细节容易出错
注意：
由于floor()的性质，向左找和向右找的实现方式有细微的不同
小心处理左右端点，容易引发无限递归

速度 > 96.48%
 */

function find_left(nums, left, right, target) {
    if (left == right) return right;
    let mid = Math.floor((left + right)/2);
    if (nums[mid] != target && nums[mid + 1] == target) return mid + 1;
    else if (nums[mid] == target) {
        if (mid == 0) return 0;
        else return find_left(nums, left, mid, target);
    }
    else return find_left(nums, mid +1, right, target);
}

function find_right(nums, left, right, target) {
    if (left == right) return left;
    let mid = Math.floor((left + right)/2);
    if (nums[mid] == target && nums[mid + 1] != target) return mid;
    else if (nums[mid + 1] == target) {
        if (nums.length -1 == mid + 1) return mid +1;
        else return find_right(nums, mid + 1 , right, target);
    }
    else return find_right(nums,left, mid, target);
}

var searchRange = function(nums, target) {
    let l = 0, r = nums.length -1;
    let mid = Math.floor((l + r)/2);

    while (l <= r) {
        if (nums[mid] > target) r = mid -1;
        else if (nums[mid] < target) l = mid + 1;
        else { // nums[mid] == target
            return ([find_left(nums, 0, mid, target), find_right(nums, mid, nums.length -1, target)]);            
        }
        mid = Math.floor((l + r)/2);
    } 

    return ([-1, -1]);
};

console.log(searchRange([0,0,0,1,2,3], 0))