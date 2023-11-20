/**
436. Find Right Interval
思路: 将intervals添加一项index后按照left的大小排序
对于intervals[i] 在右侧寻找 满足left >= 该区间右边界 的区间
注意：目标区间可以是自身
优化: 寻找目标区间可以用二分查找法
 */
var findRightInterval = function(intervals) {
  for (let i = 0; i <= intervals.length-1; i++) {
    intervals[i].push(i);
  }  
  intervals.sort((a, b) => a[0] - b[0]);
  let res = new Array(intervals.length).fill(0);
  for (let i = 0; i <= intervals.length-1; i++) {
    res[intervals[i][2]] = -1;
    for (let j = i; j <= intervals.length-1; j++) {
        if (intervals[j][0] >= intervals[i][1]) {
            res[intervals[i][2]] = intervals[j][2];
            break;
        }
    }
  }
  return res;
};
console.log(findRightInterval([[3,4],[2,3],[1,2]]));