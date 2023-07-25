/**
16. 3Sum Closest
思路：
1. 将 nums数组升序排序
2. 固定一个nums[i] 在 其右侧寻找另外两个数
3. 寻找方式：从最左段和最右端向中间寻找，如果sum偏大，r左移，如果sums偏小,l右移

 优化方式：
1. 去除重复的部分
无论是在外层循环（i）还是在内部循环（l,r）中，基本原理相同：比较当前值和上一次迭代的值，
如果相同，跳过该值，因为这个值在之前被尝试过了。

2. 固定i时的初始判定
对于包括 nums[i]和其右侧的数组，nums[i]+nums[i+1]+nums[i+2]最小
nums[-1]+nums[-2]+nums[-3]最大.
注意！最小最大只代表和当前数组内其他组合的关系，不代表是最后的ans，也不代表和target的关系
 */
var threeSumClosest = function(nums, target) {
    nums.sort( (a, b) => a - b );

    let ans = nums[0] + nums[1] + nums[2];
    
    for (let i = 0; i < nums.length -2; i++) {

        let sum = nums[i] + nums[i+1] + nums [i+2];
        if (sum >= target) return (Math.abs(sum - target) < Math.abs(ans - target)) ? sum : ans;

        sum = nums.at(-1) + nums.at(-2) + nums.at(-3);
        if (sum <= target) return (Math.abs(sum - target) < Math.abs(ans - target)) ? sum : ans;

        if (i > 0 && nums[i -1] == nums[i]) continue;

        let l = i + 1;
        let r = nums.length -1;

        while (l < r) {

            if (l > i +1 && nums[l] == nums[l -1]) {
                l ++;
                continue;
            }

            if (r < nums.length -1 && nums[r] == nums[r +1]) {
                r --;
                continue;
            }

            sum = nums[i] + nums[l] + nums[r];
            ans = (Math.abs(sum - target) < Math.abs(ans - target)) ? sum : ans;
            if (sum > target) r--;
            else if (sum < target) l++;
            else return sum;

        }
    }
    return ans;
};

console.log (threeSumClosest([-1,0,1,1,1,4], 3));