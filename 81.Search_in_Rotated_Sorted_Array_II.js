/**
81. Search in Rotated Sorted Array II
和Search in Rotated Sorted Array一样分类讨论
这道题允许了重复的元素，所以有一种特殊情况无法判断mid在
什么位置，所以只能全部搜索
其他情况用二分
速度 87.7% 可能有更好的解

注意：
用了一种简便的二分写法，但要考虑length == 1 的特殊条件
*/
var search = function(nums, target) {
    let l = 0, r = nums.length -1;
    let mid;

    // 特殊条件 nums.length = 1
    if (l == r) {
        if (nums[l] == target) return true;
        else return false;
    }
    
    while (l < r) {
        mid = Math.floor((l+r)/2);
        // 结束条件
        if (mid == l || mid == r) {
            if (nums[l] == target || nums[r] == target) return true;
            else return false;
        }
        
        if (nums[l] <= nums[mid] && nums[mid] < nums[r]) {
            // [l,r]是一个正常的升序数组
            if (nums[mid] == target) return true;
            else if (nums[mid] > target) r = mid;
            else l = mid;
        }
        else if (nums[l] <= nums[mid] && nums[mid] > nums[r]) {
            // mid 在 pivot 的左侧
            if (nums[mid] > target) {
                if (nums[l] > target) l = mid;
                else if (nums[l] < target) r = mid;
                else return true;
            }
            else if (nums[mid] < target) {
                l = mid;
            }
            else return true;
        }
        else if (nums[mid] == nums[r]) {
            // 特殊情况，无法判断位置
            for (let j = l; j <= r; j++) {
                if (nums[j] == target) return true;
            }
            return false;
        }
        else if (nums[l] > nums[mid]) {
            // mid 在 pivot 的右侧
            if (nums[mid] < target) {
                if (nums[l] > target) l = mid;
                else if (nums[l] < target) r = mid;
                else return true;
            }
            else if (nums[mid] > target) {
                r = mid;
            }
            else return true;
        }
    }
};

console.log(search([1,0,1,1,1],0))