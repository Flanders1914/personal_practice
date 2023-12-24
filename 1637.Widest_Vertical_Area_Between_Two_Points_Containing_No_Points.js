/**
1637. Widest Vertical Area Between Two Points Containing No Points
意义不明的水题
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let res = 0;
    for (let i = 0; i <+ points.length-2; i++) {
        res = Math.max(res, points[i+1][0] - points[i][0]);
    }
    return res;
};
console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]));