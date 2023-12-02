/**
1493. Longest Subarray of 1's After Deleting One Element
思路：sliding window
注意如果nums中没有0，要删掉1个1
 */
var longestSubarray = function(nums) {
    let res = 0;
    let current = 0;
    let l = 0;
    let not_deleted = true;
    for (let r = 0; r <= nums.length-1; r++) {
        if (nums[r] == 1) {
            current++;
            continue;
        }
        // nums[r] == 0
        res = Math.max(res, current);
        if (not_deleted) {
            not_deleted = false;
            continue;
        }
        // has deleted one 0
        if (nums[l] == 0) l++;
        else {
            while (nums[l] == 1) {
                current--;
                l++;
            }
            l++;
        }
    }
    res = Math.max(res, current);
    if (not_deleted) res--;
    return res;
};