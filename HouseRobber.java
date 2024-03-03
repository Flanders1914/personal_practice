class SolutionHR {
    public int rob(int[] nums) {
        int[] dp1 = new int[nums.length];
        int[] dp2 = new int[nums.length];
        dp1[0] = nums[0];
        dp2[0] = 0;
        for (int i = 1; i <= nums.length-1; i++) {
            dp1[i] = dp2[i-1] + nums[i];
            dp2[i] = Math.max(dp1[i-1], dp2[i-1]);
        }
        return Math.max(dp1[nums.length-1], dp2[nums.length-1]);
    }
}

public class HouseRobber {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 1};
        SolutionHR solution = new SolutionHR();
        System.out.println(solution.rob(nums));
    }
}
