/*
149. Max Points on a Line
思路：利用斜率k和截距h表示直线
利用hash表储存直线和点的个数
注意我们先固定一个点x然后找另外一个点y，所以对于过点x的直线line，
points中所有过直线的点在固定x的迭代中都找到了，所以如果过点x,y的直线line已经在
map中且是在点x前就添加的，那么过line的点的数量不需要增加，我们用另一个hash表实现这一点

注意：由于浮点数的性质，最好将k和h通分并以分数形式作为key，否则某些极端条件下可能是错的
*/
var maxPoints = function(points) {
    if (points.length == 1) return 1;
    const map = new Map();
    for (let i = 0; i <= points.length-2; i++) {
        let is_new = new Set();
        for (let j = i+1; j <= points.length-1; j++) {
            let a = points[i][0], b = points[i][1];
            let c = points[j][0], d = points[j][1];
            let line;
            if (a == c) line = `${a}`
            else line = `${(b-d)/(a-c)}-${(a*d-b*c)/(a-c)}`;
            if (!map.has(line)) {
                map.set(line, 2);
                is_new.add(line);
            }
            else if (is_new.has(line)) map.set(line, map.get(line)+1);
        }
    }
    return Math.max(...map.values());
};