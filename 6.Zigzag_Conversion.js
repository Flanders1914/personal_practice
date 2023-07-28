/*
6. Zigzag Conversion
思路：
1. 在纸上画出zigzag图形，并按原字符串顺序标上序号
2. 通过%区分不同部分并寻找不同部分的字符的序号和行号的关系
3. 按行对字符分类，ans为各行的合并
注意：
1. 不同的划分方式和标序号方式，处理方法不同
2. 注意对 numRows == 1 进行特殊处理，否则可能出现除0
 */
var convert = function(s, numRows) {

    if (numRows == 1) return s;

    let zigzag = [];
    let count = 0;
    for (let row = 1; row <= numRows; row++) zigzag.push([]);

    for (c of s) {
        count++;
        if (count % (numRows + numRows -2) == 0) {
            zigzag[1].push(c);

        } else if (count % (numRows + numRows -2) <= numRows) {
            zigzag[count % (numRows + numRows -2) -1].push(c);

        } else {
            zigzag[2 * numRows -1 -count%(numRows + numRows -2)].push(c);
        } 
    }

    let ans = '';
    for (let row of zigzag) ans = ans + row.join('');
    return ans;
};

console.log(convert("A",1))