class Solution {
    final int[] dp = new int[46];
    public int climbStairs(int n) {
        dp[0] = 1;
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }
}

class ClimbingStairs {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.climbStairs(3));
    }
}