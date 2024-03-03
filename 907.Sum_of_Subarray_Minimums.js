/**
907. Sum of Subarray Minimums
思路：dp + monotonic stack
dp[i] 存储以arr[i] 结尾的subarry min 和
对于arr[i] 我们找到其左边最近的小于等于arr[i] 的 arr[j]
所以 dp[i] = (i-j)*arr[i] + dp[j]
我们可以维持一个monotonic stack将寻找左边最近的小于arr[i]的arr[j] 的开销降低
使得时间复杂度为O(n)
 */
var sumSubarrayMins = function(arr) {
    let dp = new Array(arr.length).fill(0);
    let res = arr[0];
    let stack = [0];
    dp[0] = arr[0];
    for (let i = 1; i <= arr.length-1; i++) {
        let count = 1;
        if (arr[stack.at(-1)] <= arr[i]) {
            stack.push(i);
        } else {
            while (stack.length && (arr[stack.at(-1)] > arr[i])) {
                stack.pop();
            }
            if (stack.length == 0) {
                count = i+1;
            } else {
                count = i-stack.at(-1);
            }
            stack.push(i);
        }

        dp[i] = (count*arr[i] + ((count != i+1)? dp[i-count] : 0)) % 1_000_000_007;
        res += dp[i];
        res %= 1_000_000_007;
    }
    return res;
};
let arr = [11,81,94,43,3];
console.log(sumSubarrayMins(arr));
