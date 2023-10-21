/**
209. Minimum Size Subarray Sum
思路：设目标subarray为[begin，end]
从 begin = 0，开始，向右移动区间，每次迭代向右移动end
如果和小于target，那么只移动end
如果和大于target，向右移动begin至区间正好满足target，记录该区间的长度
 */
var minSubArrayLen = function(target, nums) {
    let begin = 0, end = 0;
    let sum = 0;
    let ans = nums.length+1;

    while (end <= nums.length -1) {
        sum += nums[end];
        while (sum > target && begin < end) {
            if (sum - nums[begin] >= target) {
                sum -= nums[begin];
                begin++;
            } else {
                break;
            }
        }
        if (sum >= target) ans = (ans < (end-begin+1))? ans : (end-begin+1);
        end++;
    }

    if (ans == nums.length+1) return 0;
    else return ans;
};

console.log(minSubArrayLen(4, [1,4,4]));