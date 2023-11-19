/**
435. Non-overlapping Intervals
思路：贪心
先将intervals排好序
然后遍历数组寻找下一个选取的区间
选取区间[a, b] 要求 a >= pre pre为已选择区间的右端
并且 该区间[a, b] 是所有满足条件区间中b最小的那个，这样才能有空间容纳更多区间
注意下标min_i不要超出范围
该题在注释部分的dp是当剩余的区间必须连续的写法，将 == 改为 >= 也可以做该题
不过时间复杂度达到了O(n^2)

另外这道题如果一开始排序按照b的大小排序应该会减少编程复杂度，不过时间复杂度仍然是O(nlogn) 由排序决定的
 */
/*
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] == b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    });
    let dp = new Array(intervals.length).fill(intervals.length-1);
    for (let i = 1; i <= dp.length-1; i++) {
        for (let j = i-1; j >= 0; j--) { 
            if (intervals[i][0] == intervals[j][1]) {
                dp[i] = Math.min(dp[i], dp[j]-1);
            }  
        }
    }
    return Math.min(...dp);
};
*/
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] == b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    });

    let res = 0;
    let pre = -Number.MAX_VALUE;
    for (let i = 0; i <= intervals.length-1; i++) {
        let min_i = i;
        while (min_i <= intervals.length-1 && intervals[min_i][0] < pre) min_i++;
        if (min_i == intervals.length) return res + min_i-i;
        let begin = min_i+1;
        for (let j = begin; j <= intervals.length-1; j++) {
            if (intervals[min_i][1] > intervals[j][1]) min_i = j;
            else if (intervals[min_i][1] <= intervals[j][0]) break;
        }
        res += min_i - i;
        pre = intervals[min_i][1];
        i = min_i;
    }
    return res;
};