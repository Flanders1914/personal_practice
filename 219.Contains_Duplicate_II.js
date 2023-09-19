/**
219. Contains Duplicate II
利用map储存在左侧的，与当前元素nums[i]相同的元素的最近坐标
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0; i <= nums.length -1; i++) {
        if (map.has(nums[i])) {
            if (i-map.get(nums[i]) <= k) return true;
            else map.set(nums[i], i);
        }
        else {
            map.set(nums[i], i);
        }
    }
    return false;
};