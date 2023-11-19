/**
327. Count of Range Sum
思路：归并排序法
类似315. Count of Smaller Numbers After Self
首先我们将数组每一项累加并在首部添加0, S(i,j) = nums[j] - nums[i-1];
我们在分割区间并递归调用后唯一要左的就是找到横跨两个区间的S(i,j)
这里我们在left里迭代i，每个i我们寻找j, k 满足 j刚刚使S(i,j) >= lower
k刚刚使S(i,k) > upper 于是res += k-j
每一次迭代的j,k在之前一次的基础上向后移动，因为 随着 i的迭代nums[i]变大
nums[j] 或者 nums[k]也需要增加
因此每一次递归内循环的时间复杂度是O(n) 整体的时间复杂度是O(nlogn)
这道题必须让时间复杂度达到O(nlogn)
 */
var countRangeSum = function(nums, lower, upper) {
    for (let i = 1; i <= nums.length-1; i++) {
        nums[i] += nums[i-1];
    }
    nums.unshift(0);
    let res = 0;
    let mergeSort = function(nums, l, r) {
        if (l == r) return;
        let pivot = (l+r) >> 1;
        mergeSort(nums, l, pivot);
        mergeSort(nums, pivot+1, r);
        let j = pivot+1;
        let k = pivot+1;
        for (let i = l; i <= pivot; i++) {
            while (j <= r && nums[j]-nums[i] < lower) j++;
            while (k <= r && nums[k]-nums[i] <= upper) k++;
            res += k - j;
        }
        let cache = [];
        let i = l;
        j = pivot+1;
        while (i <= pivot && j <= r) {
            if (nums[i] < nums[j]) {
                cache.push(nums[i]);
                i++;
            } else {
                cache.push(nums[j]);
                j++;
            }
        } 
        while (i <= pivot) {
            cache.push(nums[i]);
            i++;
        }
        while (j <= r) {
            cache.push(nums[j]);
            j++;
        }
        for (let i = 0; i <= cache.length-1; i++) {
            nums[i+l] = cache[i];
        }
        return;
    };
    mergeSort(nums, 0, nums.length-1);
    return res;
};
console.log(countRangeSum([-2,5,-1], -2, 2));