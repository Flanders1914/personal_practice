/*
思路： 
将重叠的区间和不重叠的区间分开处理
重叠的区间的begin是所有重叠区间最小的begin
重叠区间的end是所有区间最大的end
注意：
没有重叠区间时要做单独处理
*/
var insert = function(intervals, newInterval) {
    let ans = [];
    let begin = newInterval[0];
    let end = newInterval[1];
    let is_pushNew = false, is_overlapping = false;

    for (let i = 0; i <= intervals.length -1; i++) {
        if (intervals[i][0] > newInterval[1] || intervals[i][1] < newInterval[0]) {

            if (is_pushNew) {
                ans.push([begin,end]);
                is_pushNew = false;
            }
            ans.push([intervals[i][0], intervals[i][1]]);
        }
        else {
            begin = (begin > intervals[i][0])? intervals[i][0] : begin;
            end = (end > intervals[i][1])? end : intervals[i][1];
            is_pushNew = true;
            is_overlapping = true;
        }    
    }

    if (is_pushNew) ans.push([begin, end]);

    if (!is_overlapping) {
        ans.push([begin, end]);
        ans.sort( (a, b) => a[0] - b[0] );
    }

    return ans;
};