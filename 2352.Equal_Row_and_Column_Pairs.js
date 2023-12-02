/**
2352. Equal Row and Column Pairs
思路：将row 和 column 的数组转换为字符串然后利用hash表
 */
var equalPairs = function(grid) {
    let hash = new Map();
    for (let i = 0; i <= grid.length-1; i++) {
        let s = grid[i].join('.');
        if (hash.has(s)) hash.set(s, hash.get(s)+1);
        else hash.set(s, 1);
    }
    
    let res = 0;
    for (let j = 0; j <= grid[0].length-1; j++) {
        let temp = [];
        for (let i = 0; i <= grid.length-1; i++) {
            temp.push(grid[i][j]);
        }
        let s = temp.join('.');
        if (hash.has(s)) {
            res += hash.get(s);
        }
    }
    return res;
};
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]));