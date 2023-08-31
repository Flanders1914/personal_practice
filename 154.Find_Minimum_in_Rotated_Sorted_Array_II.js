/*
154. Find Minimum in Rotated Sorted Array II
分类讨论
先将nums[mid]与nums[r]比较
在nums[mid] == nums[r] 的情况下比较nums[r] 和 nums[l]
*/
var findMin = function(nums) {
    let l = 0, r = nums.length-1;
    while (true) {
        let mid = (l+r) >> 1;
        //mid==r 或者 mid==l 时结束循环，简化下面的处理
        if (mid == l || mid == r) return Math.min(nums[l],nums[r]);
        if (nums[mid] < nums[r])  r = mid; // 最小数必然在mid左侧或者就是nums[mid]
        else if (nums[mid] > nums[r]) l = mid+1; // 若 nums[mid] > nums[r] 最小数必然在mid右侧
        else { // nums[mid] == nums[r]
            if (nums[l] < nums[r]) return nums[l];
            else if (nums[l] > nums[r]) r = mid;
            else { //此时nums[mid] == nums[l] == nums[r]
                l++;
                r--;
            }
        }
    }
};

console.log(findMin([2,2,2,0,1]))