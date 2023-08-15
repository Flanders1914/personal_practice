/**
84. Largest Rectangle in Histogram
简单的做法
思路: 对于每一个元素，以该元素的高为高，向两遍拓展的矩形面积是：
heights[i]*(右侧第一个矮于该元素的元素坐标 - 左侧第一个矮于该元素的元素坐标 -1)
求解每个元素的 左侧第一个矮于该元素的元素坐标：
令初始 p = i-1
若 heights[p] >= heights[i] p = left[p]
直到p 达到0 或者条件不成立
left[i] = p;

求解 right[i] 原理相同
*/
var largestRectangleArea = function(heights) {
    let right = new Array(heights.length).fill(0);
    let left = new Array(heights.length).fill(0);

    left[0] = -1;
    right[heights.length -1] = heights.length;

    for (let i = 1; i <= heights.length -1; i++) {
        let p = i -1;
        while (p >= 0 && heights[p] >= heights[i]) {
            p = left[p];
        }
        left[i] = p;
    }

    for (let i = heights.length -2; i >= 0; i--) {
        let p = i +1;
        while (p <= heights.length -1 && heights[p] >= heights[i]) {
            p = right[p];
        }
        right[i] = p;
    }

    let ans = 0;

    for (let i = 0; i <= heights.length -1; i++) {
        let area = heights[i]*(right[i] - left[i] -1);
        ans = (ans > area)? ans : area;
    }

    return ans;
};

console.log(largestRectangleArea([4,2,0,3,2,5]))