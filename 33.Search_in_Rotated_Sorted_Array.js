/*
思路：很恶心的一道题目，基本思路为分类讨论的二分查找；
先分清楚mid在哪个区域，再根据每一种情况具体讨论nums[mid] 和 target 的关系
已经标上了一定注释，但理解该程序请自己画图
注意：避免死循环

该程序打败了99.54%
 */
var search = function(nums, target) {
    if (nums.length == 1) {
        if (nums[0] == target) return 0;
        else return -1;
    }

    let l = 0, r = nums.length -1, mid = Math.floor((l + r)/2);
    while (l <= r) {
        if (nums[mid] >= nums[l] && nums[l] >= nums[r]) {
            // mid 在左边
            if (target == nums[mid]) return mid;
            else if (target > nums[mid]) l = mid + 1;
            else {
                // target < nums[mid]
                if (target > nums[l]) r = mid - 1;
                else if (target < nums[l]) l = mid + 1;
                else return l;
            }
        }

        else if (nums[mid] >= nums [l] && nums[mid] <= nums[r]) {
            // mid在一个正常的升序数组中
            if (nums[mid] > target) r = mid - 1;
            else if (nums[mid] < target) l = mid + 1;
            else return mid;
        }

        else if (nums[mid] < nums[l]) {
            // mid在右边
            if (target < nums[mid]) r = mid - 1;
            else if (target > nums[mid]) {
                // nums[mid] < nums[l] 并且 nums[target] > nums[mid]
                if (target > nums[r]) r = mid - 1;
                else if (target < nums[r]) l = mid + 1;
                else return r;
            } else return mid;
        }

        mid = Math.floor((l + r)/2);
    }
    return -1;
};

console.log(search([4,5,6,7,0,1,2], 7));