/**
1235. Maximum Profit in Job Scheduling
思路：dp
首先由于数据大小的原因，类似背包问题的做法不可行（下面的注释）
我们将dp[i] 定义为 从第i个 任务的开始时间出发能够获得的最大利润
并将 startTime endTime profit 根据 startTime 排序
从末尾开始到0迭代， dp[i] = Max(dp[i+1], profit[i] + 最左侧满足 j>= endTime[i]的dp[j])
我们可以利用二分查找完成对最左侧满足 j>= endTime[i]的dp[j]的查找
 */
/*
var jobScheduling = function(startTime, endTime, profit) {
    let begin = Math.min(...startTime);
    let arr = [];
    for (let i = 0; i <= startTime.length-1; i++) {
        arr.push([startTime[i], endTime[i], profit[i]]);
    }
    arr.sort((a,b) => a[1]-b[1]);
    let end = arr.at(-1)[1];

    let k = profit.length;
    const dp = new Array(k).fill().map(() => new Array(end-begin+1).fill(0));

    for (let i = 0; i <= k-1; i++) {
        for (let j = 1; j <= end - begin; j++) {
            if (i) dp[i][j] = dp[i-1][j];
            dp[i][j] = Math.max(dp[i][j], dp[i][j-1]);
            if (arr[i][1] <= (j+begin)) {
                dp[i][j] = Math.max(dp[i][j], dp[i][arr[i][0]-begin]+arr[i][2]);
            }
        }
    }

    return dp[k-1][end-begin];
};
*/
function bisearch(begin, arr, target, dp) {
    if (target > arr.at(-1)[0]) return 0;
    if (target <= arr[begin][0]) return dp[begin];
    let l = begin, r = arr.length-1;
    while (l < r) {
        let mid = (l + r) >> 1;
        if (mid == l) {
            if (target <= arr[mid][0]) return dp[mid];
            else if (target <= arr[r][0]) return dp[r];
            else return 0;
        }
        if (target <= arr[mid][0]) r = mid;
        else l = mid;
    }
}

var jobScheduling = function(startTime, endTime, profit) {
    let arr = [];
    for (let i = 0; i <= startTime.length-1; i++) {
        arr.push([startTime[i], endTime[i], profit[i]]);
    }
    arr.sort((a,b) => a[0]-b[0]);

    let dp = new Array(arr.length).fill(0);
    dp[arr.length-1] = arr[arr.length-1][2];
    for (let i = arr.length-2; i >= 0; i--) {
        dp[i] = Math.max(dp[i+1], arr[i][2] + bisearch(i+1, arr, arr[i][1], dp));
    }

    return Math.max(...dp);
};


let startTime = [1,2,2,3], endTime = [2,5,3,4], profit = [3,4,1,2];
console.log(jobScheduling(startTime,endTime,profit));