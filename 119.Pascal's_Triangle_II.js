/*
119. Pascal's Triangle II
帕斯卡三角形，只需求给定的行
注意坐标即可
 */
var getRow = function(rowIndex) {
    if (rowIndex == 0) return [[1]];
    let previous = [1];
    let current;

    for (let row = 1; row <= rowIndex; row++) {
        current = [1];
        for (let i = 0; i <= row -2; i++) {
            current.push(previous[i] + previous[i +1]);
        }
        current.push(1);
        previous = current;
    }

    return previous;
};

console.log(getRow(3));