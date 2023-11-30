/**
1679. Max Number of K-Sum Pairs
思路：排序，然后前后指针往中心找
 */
var maxOperations = function(nums, k) {
    let res = 0;
    nums.sort((a,b)=> a-b);
    let l = 0, r = nums.length-1;
    while (l < r) {
        if (nums[l]+nums[r] == k) {
            res++;
            l++;
            r--;
        } else if (nums[l]+nums[r] > k) r--;
        else l++;
    }
    return res;
};