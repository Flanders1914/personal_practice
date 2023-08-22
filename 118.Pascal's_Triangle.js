/*
118. Pascal's Triangle
帕斯卡三角形
注意坐标即可
 */
var generate = function(numRows) {
    const ans = [[1], [1,1]];
    if (numRows == 1) return [[1]];
    if (numRows == 2) return ans;

    for (let row = 3; row <= numRows; row++) {
        ans.push([]);
        ans[row -1].push(1);
        for (let i = 0; i <= row -3; i++) {
            ans[row -1].push(ans[row -2][i] + ans[row -2][i +1]);
        }
        ans[row -1].push(1);
    }

    return ans;
};

for (let row of generate(5)) console.log(row);