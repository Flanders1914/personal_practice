/**
223. Rectangle Area
数学题分类讨论
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let ans = (ay2-ay1)*(ax2-ax1) + (by2-by1)*(bx2-bx1);
    if (ax2 > bx2) { //先让b始终在a右侧
        let temp = ay2;
        ay2 = by2;
        by2 = temp;
        temp = ay1;
        ay1 = by1;
        by1 = temp;
        temp = ax2;
        ax2 = bx2;
        bx2 = temp;
        temp = ax1;
        ax1 = bx1;
        bx1 = temp;
    }
    if (bx1 >= ax2 || ay2 <= by1 || ay1 >= by2) return (ay2-ay1)*(ax2-ax1) + (by2-by1)*(bx2-bx1);
    let h = 0;
    let l = 0;
    if (ay2 < by2) {
        h = ay2-by1;
        if (ay1 > by1) h -= ay1 - by1;
    } else {
        if (ay1 <= by1) h = by2 - by1;
        else  h = by2 - ay1;
    }
    if (ax1 <= bx1) l = ax2 - bx1;
    else l = ax2 - ax1;
    return ans - l*h;
};
let ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2;
console.log(computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2));