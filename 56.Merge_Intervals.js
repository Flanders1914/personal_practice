/*
56. Merge Intervals
思路：非常简单，下面的代码自解释
注意：不要忘记在最后添加上[last_begin, last_end]
*/
var merge = function(intervals) {
    intervals.sort( (a,b) => a[0] - b[0] );
    let ans = [];
    let last_begin = intervals[0][0], last_end = intervals[0][1];

    for (let i = 1; i <= intervals.length -1 ; i++) {
        let current_begin = intervals[i][0];
        let current_end = intervals[i][1];
        
        if (current_begin <= last_end && current_end > last_end) {
            last_end = current_end;
        }
        else if (current_begin > last_end) {
            ans.push([last_begin, last_end]);
            last_begin = current_begin;
            last_end = current_end;
        }
    }

    ans.push([last_begin, last_end]);

    return ans;
};