/**
532. K-diff Pairs in an Array
利用排序优化
 */
var findPairs = function(nums, k) {
    nums.sort((a,b) => a-b);
    let res = 0;
    for (let i = 0; i <= nums.length-2; i++) {
        if (i && (nums[i] == nums[i-1])) continue;
        for (let j = i+1; j <= nums.length-1; j++) {
            if ((j != i+1) && (nums[j] == nums[j-1])) continue; // 注意要把第一个数排除在外否则 k=0的情况出错
            if ((nums[j] - nums[i]) == k) {
                res++;
                break;
            } else if ((nums[j]-nums[i]) > k) break;
        }
    }
    return res;
};
console.log(findPairs([1,2,3,4,5], 1));