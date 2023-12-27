/**
539. Minimum Time Difference
思路：
写了两个函数，一个是用来将time排序
一个是用来计算差
这里对字符串的转换写重复了，所以可以优化
 */
function diff_caculator (t1, t2) {
    let [h1, m1] = t1.split(":");
    h1 = Number(h1);
    m1 = Number(m1);
    let [h2, m2] = t2.split(":");
    h2 = Number(h2);
    m2 = Number(m2);
    let diff = (h2-h1)*60 + (m2-m1);
    if (diff < 0) diff += 24 * 60;
    if (diff > 12 * 60) diff = 24 * 60 - diff;
    return diff;
}
var findMinDifference = function(timePoints) {
    let min = 24 * 60;
    timePoints.sort((t1, t2) =>{
        let [h1, m1] = t1.split(":");
        h1 = Number(h1);
        m1 = Number(m1);
        let [h2, m2] = t2.split(":");
        h2 = Number(h2);
        m2 = Number(m2);
        if (h1 < h2) return 1;
        else if (h1 > h2) return -1;
        else {
            if (m1 < m2) return 1;
            else return -1;
        }
    });
    for (let i = 0; i <= timePoints.length-2; i++) {
        min = Math.min(min, diff_caculator(timePoints[i], timePoints[i+1]));
    }
    return Math.min(min, diff_caculator(timePoints.at(-1), timePoints[0]));
};
let timePoints = ["23:59","00:00"];
console.log(findMinDifference(timePoints));