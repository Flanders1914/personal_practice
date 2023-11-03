/**
334. Increasing Triplet Subsequence
思路：我们用floor和ceil记录前两个sequence
条件 floor < ceil 且 floor的坐标i < ceil的坐标j 且 floor和ceil是当前
所有满足的取值对中最小的那个
我们先找到一对floor和ceil
从ceil的坐标往后开始搜索，对于nums[i] 有三种可能
1. nums[i] > ceil return true;
2. floor < nums[i] =< ceil 将 nums[i]设置为新ceil
3. nums[i] < floor 此时有两种情况(相等的话可以直接跳过)
    a. sequence必须由老的ceil 和 floor
    b. sequence不一定由老的ceil 和 floor组成
我们往前迭代i到 nums[i] < nums[i+1];
如果 nums[i+1] > ceil 则return true
如果 nums[i+1] < ceil 则 只可能是情况b，因为如果之后存在nums[k]和老floor
和ceil组成了sequence那么nums[i] nums[i+1] nums[k] 也可以组成sequence
所以 floor = nums[i] ceil = nums[i+1] 从i+2开始继续搜寻
时间复杂度O(n)
空间复杂度O(1)
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;
    let n = 1;
    while (n <= nums.length-1 && nums[n-1] >= nums[n]) {
        n++;
    }
    if (n >= nums.length-1) return false;
    
    let ceil = nums[n];
    let floor = nums[n-1];

    for (let i = n +1; i <= nums.length-1; i++) {
        if (nums[i] > ceil) return true;
        if (nums[i] > floor) ceil = nums[i];
        else {
            let j = i;
            while (j <= nums.length -2 && nums[j] >= nums[j+1]) {
                j++;
            }
            if (j == nums.length -1) return false;
            if (ceil < nums[j+1]) return true;
            else {
                floor = nums[j];
                ceil = nums[j+1];
                i = j+1;
            }
        }
    }
    return false;
};
console.log(increasingTriplet([20,100,10,12,5,13]));