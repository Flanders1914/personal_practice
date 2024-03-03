import java.util.Arrays;
import java.util.Stack;
class SolutionSSM {
    public int sumSubarrayMins(int[] arr) {
        int len = arr.length;
        int[] dp = new int[len];
        int res = 0;
        Arrays.fill(dp, 0);
        Stack <Integer> stack = new Stack<>();
        final int MOD = (int) 1e9 + 7;

        for (int i = 0; i <= len-1; i++) {
            int count = 1;
            if (stack.empty()) {
                stack.push(i);
            } else {
                while (!stack.empty() && arr[stack.peek()] > arr[i]) {
                    stack.pop();
                }
                if (stack.empty()) count = i+1;
                else count = i-stack.peek();
                stack.push(i);
            }
            dp[i] = count * arr[i] + ((count == i+1)? 0 : dp[i-count]);
            dp[i] %= MOD;
            res += dp[i];
            res %= MOD;
        }

        return res;
    }
}

public class SumofSubarrayMinimums {
    public static void main(String[] args) {
        SolutionSSM solution = new SolutionSSM();
        int[] arr = {11,81,94,43,3};
        System.out.println(solution.sumSubarrayMins(arr));
    }
}
