/*
55. Jump Game
思路：
运用了一个简单的dp
不过这道题最好用贪心做，设置一个变量 reachable 
表示能够达到的最右端就行了
*/
var canJump = function(nums) {

    let dp = new Array(nums.length).fill(false);
    dp[0] = true;

    for (let i = 0; i <= nums.length -1; i++) {
        let max_jump = nums[i];
        if (dp[i]) {
            for (let step = 0; step <= max_jump; step ++) {
                if (step + i <= nums.length -1) dp[step + i] = true;
                else break;
            }
        }
    }
    return dp[nums.length -1];
};

console.log(canJump([3]));