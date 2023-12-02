/**
1004. Max Consecutive Ones III
思路：sliding window
 */
var longestOnes = function(nums, k) {
    let l = 0;
    let current = 0;
    let res = 0;
    for (let r = 0; r <= nums.length-1; r++) {
        if (nums[r] == 1) {
            current++;
        } else { // nums[r] == 0
            if (k > 0) {
                current++;
                k--;
            } else { // k == 0
                if (nums[l] == 0) {
                    l++;
                } else {
                    while (nums[l] == 1) {
                        l++;
                        current--;
                    }
                    l++;
                }
            }
        }
        res = Math.max(res, current);
    }
    return res;
};