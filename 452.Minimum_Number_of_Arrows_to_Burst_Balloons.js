/**
452. Minimum Number of Arrows to Burst Balloons
思路：对points按照left进行排序，变量r存储一次扎破之前所有未扎破气球位置的最右值，若当前气球
起始 > r 之前的气球必须扎破，r为该气球最右端，若当前气球起始小于等于r r取min(r, 该气球的右端)
注意最后要加一，因为最后一波气球没有扎
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let r = points[0][1];
    let res = 0;
    for (let i = 1; i <= points.length-1; i++) {
        if (points[i][0] > r) {
            res++;
            r = points[i][1];
        } else {
            r = Math.min(r, points[i][1]);
        }
    }
    return res+1;
};
console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));