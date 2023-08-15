/**
85. Maximal Rectangle
思路：转化为84.largest rectangle in histogram
将该题目看作对以每一行为底的柱状图求最大矩形，即可
对于行i，若matrix[i][j] == 0 矩形不存在
若matrix[i][j] == 1 矩形高为 matrix[i-1][j] +1
 */
function find_largest_rectangle(a) {
    let len = a.length;
    let left = new Array(len).fill(0);
    let right = new Array(len).fill(0);
    left[0] = -1;
    right[len -1] = len;
    for (let i = 1; i <= len -1; i++) {
        let p = i-1;
        while (p >= 0 && a[p] >= a[i]) p = left[p];
        left[i] = p;
    }
    for (let i = len -2; i >= 0; i--) {
        let p = i+1;
        while (p <= len -1 && a[p] >= a[i]) p = right[p];
        right[i] = p;
    }

    let max = 0;
    for (let i = 0; i <= len -1; i++) {
        let area = a[i] * (right[i] - left[i] -1);
        max = (max > area)? max : area;
    }
    return max;
}

var maximalRectangle = function(matrix) {
    //字符转化为数字
    for (let i = 0; i <= matrix.length -1; i++) {
        for (let j = 0; j <= matrix[0].length -1; j++) {
            if (matrix[i][j] == '0') matrix[i][j] = 0;
            else matrix[i][j] = 1;
        }
    }

    let ans = 0;
    for (let i = 0; i <= matrix.length -1; i++) {
        //第一行
        if (!i) {
            let count = 0;
            for (let j = 0; j <= matrix[0].length -1; j++) {
                if (matrix[i][j] == 0) {
                    ans = (ans > count)? ans : count;
                    count = 0;
                } else {
                    count++;
                }
            }
            ans = (ans > count)? ans : count;
            continue;
        }
        //后面的行，先计算高度
        for (let j = 0; j <= matrix[0].length -1; j++) {
            if (matrix[i][j] == 1) matrix[i][j] += matrix[i-1][j];
        }
        //利用84计算largest rectangle 的方法计算以i行为底面的最大rectangle
        let max = find_largest_rectangle(matrix[i]);
        ans = (ans > max)? ans : max;
    }

    return ans;
};

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));